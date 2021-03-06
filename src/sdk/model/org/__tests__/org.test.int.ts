import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { User } from '../../user/user';
import { ApiError } from '../../../config/api-error';
import { Org } from '../org';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';

let auth: IlandDirectGrantAuthProvider;
let inventoryOrg: InventoryEntity;

beforeAll(async() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
  return User.getCurrentUser().then(async function(user) {
    return user.getInventory().then(function(inventory) {
      if (inventory.length === 0) {
        throw Error('no company inventories returned for test user, cant perform test.');
      }
      const orgs = inventory[0].getEntitiesByType('IAAS_ORGANIZATION');
      expect(orgs).toBeDefined();
      if (orgs) {
        expect(orgs.length).toBeGreaterThan(0);
        inventoryOrg = orgs[0];
      } else {
        fail('failed to get inventory Orgs for org integration tests');
      }
    });
  });
});

test('Get a proper error when trying to retrieve non-existent Org', async() => {
  try {
    await Org.getOrg('fake-uuid');
  } catch (err) {
    const apiError = err as ApiError;
    const raw = apiError.getJson();
    expect(apiError.getType()).toBe('UnknownError');
    expect(apiError.getMessage()).toBeDefined();
    expect(apiError.getDetailMessage()).toBe(raw.detail_message);
    expect(apiError.getMessage()).toBe(raw.message);
    expect(apiError.getType()).toBe(raw.type);
    expect(apiError.toString().length).toBeGreaterThan(0);
  }
});

test('Can get Org and verify required properties', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(function(org) {
    const raw = org.json;
    expect(org.name).toBeDefined();
    expect(org.name).toBe(raw.name);
    expect(org.uuid).toBe(inventoryOrg.uuid);
    expect(org.uuid).toBe(raw.uuid);
    expect(org.locationId).toBeDefined();
    expect(org.locationId).toBe(raw.location_id);
    expect(org.vcloudHref).toBeDefined();
    expect(org.vcloudHref).toBe(raw.vcloud_href);
    expect(org.description).toBeDefined();
    expect(org.description).toBe(raw.description);
    expect(org.toString().length).toBeGreaterThan(0);
    expect(org.deleted).toBe(false);
    expect(org.updatedDate).toBeDefined();
    expect(org.deletedDate).toBeNull();
    expect(org.entityType).toBe('IAAS_ORGANIZATION');
    expect(org.enabled).toBeDefined();
    expect(org.enabled).toBe(raw.enabled);
    expect(org.vappMaxRuntimeLease).toBeDefined();
    expect(org.vappMaxRuntimeLease).toBe(raw.vapp_max_runtime_lease);
    expect(org.vappMaxStorageLease).toBeDefined();
    expect(org.vappMaxStorageLease).toBe(raw.vapp_max_storage_lease);
    expect(org.vappTemplateMaxStorageLease).toBeDefined();
    expect(org.vappTemplateMaxStorageLease).toBe(raw.vapp_template_max_storage_lease);
    expect(org.vappDeletedOnStorageLeaseExpiration).toBeDefined();
    expect(org.vappDeletedOnStorageLeaseExpiration).toBe(raw.vapp_delete_on_storage_expire);
    expect(org.vappTemplateDeletedOnStorageLeaseExpiration).toBeDefined();
    expect(org.vappTemplateDeletedOnStorageLeaseExpiration).toBe(raw.vapp_template_delete_on_storage_expire);
    expect(org.zertoTarget).toBeDefined();
    expect(org.zertoTarget).toBe(raw.zerto_target);
    expect(org.fullName).toBeDefined();
    expect(org.fullName).toBe(raw.fullname);
    expect(org.companyId).toBeDefined();
    expect(org.companyId).toBe(raw.company_id);
  });
});

test('Can refresh Org', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    return org.refresh().then(function(refreshed) {
      expect(refreshed.uuid).toBe(inventoryOrg.uuid);
    });
  });
});

test('Can get org historical billing', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    const now = new Date();
    const oneYearAgo = new Date(now.valueOf() - (365 * 24 * 60 * 60 * 1000));
    return org.getHistoricalBilling(oneYearAgo, now).then(function(bills) {
      expect(bills).toBeDefined();
      expect(bills.length).toBeGreaterThan(0);
    });
  });
});

test('Can get org billing summary', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    return org.getBillingSummary().then((billingSummary) => {
      expect(billingSummary.currentHour).toBeDefined();
      expect(billingSummary.previousHour).toBeDefined();
      expect(billingSummary.currentMonth).toBeDefined();
      expect(billingSummary.previousMonth).toBeDefined();
      expect(billingSummary.testDrive).toBeDefined();
    });
  });
});

test('Can get org billing by vdc in range', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    const now = new Date();
    const thisMonth = now.getMonth() + 1;
    const lastMonth = ((now.getMonth() + 11) % 12) + 1;
    const thisYear = now.getFullYear();
    const lastMonthYear = lastMonth < thisMonth ? thisYear : thisYear - 1;
    return org.getBillingByVdcInRange(lastMonth, lastMonthYear, thisMonth, thisYear).then((orgVdcBills) => {
      expect(orgVdcBills).toBeDefined();
      expect(orgVdcBills.length).toBeGreaterThan(0);
      const orgVdcBill = orgVdcBills[0];
      expect(orgVdcBill.orgUuid).toBe(org.uuid);
      expect(orgVdcBill.bills).toBeDefined();
      expect(orgVdcBill.bills.length).toBeGreaterThan(0);
      expect(orgVdcBill.month).toBeDefined();
      expect(orgVdcBill.year).toBeDefined();
      expect(orgVdcBill.toString()).toBeDefined();
      expect(orgVdcBill.json).toBeDefined();
    });
  });
});

test('Can get org billing by vdc', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    const now = new Date();
    const thisMonth = now.getMonth() + 1;
    const thisYear = now.getFullYear();
    return org.getBillingByVdc(thisMonth, thisYear).then((orgVdcBill) => {
      expect(orgVdcBill).toBeDefined();
      if (orgVdcBill) {
        expect(orgVdcBill.orgUuid).toBe(org.uuid);
        expect(orgVdcBill.bills).toBeDefined();
        expect(orgVdcBill.bills.length).toBeGreaterThan(0);
        expect(orgVdcBill.month).toBeDefined();
        expect(orgVdcBill.year).toBeDefined();
        expect(orgVdcBill.toString()).toBeDefined();
        expect(orgVdcBill.json).toBeDefined();
      }
    });
  });
});

test('Can get org bill', async() => {
  return Org.getOrg(inventoryOrg.uuid).then(async function(org) {
    expect(org.uuid).toBe(inventoryOrg.uuid);
    const now = new Date();
    const thisMonth = now.getMonth() + 1;
    const thisYear = now.getFullYear();
    return org.getBill(thisMonth, thisYear).then((bill) => {
      expect(bill).toBeDefined();
    });
  });
});

test('Can get org edges', async() => {
  const org = await Org.getOrg(inventoryOrg.uuid);
  expect(org.uuid).toBe(inventoryOrg.uuid);
  const edges = await org.getEdges();
  expect(edges).toBeDefined();
  expect(edges instanceof Array).toBeTruthy();
});

test('Can get org vdcs', async() => {
  const org = await Org.getOrg(inventoryOrg.uuid);
  expect(org.uuid).toBe(inventoryOrg.uuid);
  const vdcs = await org.getVdcs();
  expect(vdcs).toBeDefined();
  expect(vdcs instanceof Array).toBeTruthy();
});

test('Can get org vapps', async() => {
  const org = await Org.getOrg(inventoryOrg.uuid);
  expect(org.uuid).toBe(inventoryOrg.uuid);
  const vapps = await org.getVapps();
  expect(vapps).toBeDefined();
  expect(vapps instanceof Array).toBeTruthy();
});

test('Can get org vms', async() => {
  const org = await Org.getOrg(inventoryOrg.uuid);
  expect(org.uuid).toBe(inventoryOrg.uuid);
  const vms = await org.getVms();
  expect(vms).toBeDefined();
  expect(vms instanceof Array).toBeTruthy();
});

test('Can get org internal networks', async() => {
  const org = await Org.getOrg(inventoryOrg.uuid);
  expect(org.uuid).toBe(inventoryOrg.uuid);
  const nets = await org.getInternalNetworks();
  expect(nets).toBeDefined();
  expect(nets instanceof Array).toBeTruthy();
});

test('Can get org vapp networks', async() => {
  const org = await Org.getOrg(inventoryOrg.uuid);
  expect(org.uuid).toBe(inventoryOrg.uuid);
  const nets = await org.getVappNetworks();
  expect(nets).toBeDefined();
  expect(nets instanceof Array).toBeTruthy();
});
