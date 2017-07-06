import {Task} from './task';
import {Entity} from './entity';
import {Iland} from '../iland';
import {Vnic} from './vnic';
import {ApiVm, ApiVmStatus} from './api-spec/api-vm';
import {ApiVnic} from './api-spec/api-vnic';
import {ApiTask} from './api-spec/api-task';
import {EntityType} from './api-spec/api-entity-type';

/**
 * Enumeration of possible VM power statuses.
 */
export enum VmPowerStatus {
  FAILED_CREATION = 'FAILED_CREATION',
  INCONSISTENT_STATE = 'INCONSISTENT_STATE',
  POWERED_OFF = 'POWERED_OFF',
  POWERED_ON = 'POWERED_ON',
  SUSPENDED = 'SUSPENDED',
  UNKNOWN = 'UNKNOWN',
  UNRECOGNIZED = 'UNRECOGNIZED',
  UNRESOLVED = 'UNRESOLVED',
  WAITING_FOR_INPUT = 'WAITING_FOR_INPUT',
  MIXED = 'MIXED',
  PARTIALLY_POWERED_OFF = 'PARTIALLY_POWERED_OFF'
}

/**
 * Virtual Machine.
 */
export class Vm extends Entity {

  constructor(private _apiVm: ApiVm) {
    super(_apiVm);
  }

  /**
   * Gets a VM by UUID.
   * @param uuid VM UUID
   * @returns {Promise<Vm>} promise that resolves with the VM
   */
  static async getVm(uuid: string): Promise<Vm> {
    return Iland.getHttp().get(`/vm/${uuid}`).then(function(response) {
      let apiVm = response.data as ApiVm;
      return new Vm(apiVm);
    });
  }

  getEntityType(): EntityType {
    return EntityType.VM;
  }

  /**
   * Gets the VM's local ID.
   * @returns {string} the VM's local ID
   */
  getVmLocalId(): string {
    return this._apiVm.vm_local_id;
  }

  /**
   * Gets the VM's datastore reference.
   * @returns {string} datastore reference
   */
  getVimDatastoreRef(): string {
    return this._apiVm.vim_datastore_ref;
  }

  /**
   * Gets the UUID of the vDC that the VM belongs to.
   * @returns {string} vDC UUID
   */
  getVdcUuid(): string {
    return this._apiVm.vdc_uuid;
  }

  /**
   * Gets the HREF of the vCloud Director instance that this VM is associated with.
   * @returns {string} vCloud HREF
   */
  getVcloudHref(): string {
    return this._apiVm.vcloud_href;
  }

  /**
   * Gets the name of the vCenter server that the VM is associated with.
   * @returns {string} vCenter name
   */
  getVcenterName(): string {
    return this._apiVm.vcenter_name;
  }

  /**
   * Gets the VM'r vCenter reference.
   * @returns {string} vCenter reference
   */
  getVcenterMoRef(): string {
    return this._apiVm.vcenter_moref;
  }

  /**
   * Gets the UUID of the vCenter instance that the VM is associated with.
   * @returns {string} vCenter UUID
   */
  getVcenterInstanceUuid(): string {
    return this._apiVm.vcenter_instance_uuid;
  }

  /**
   * Gets the HREF of the vCenter instance that the VM is associated with.
   * @returns {string} vCenter HREF
   */
  getVcenterHref(): string {
    return this._apiVm.vcenter_href;
  }

  /**
   * Gets the UUID of the vApp that this VM belongs to.
   * @returns {string} vApp UUID
   */
  getVappUuid(): string {
    return this._apiVm.vapp_uuid;
  }

  /**
   * Gets the list of storage profiles that are available to this VM.
   * @returns {Array<string>} list of storage profile UUIDs
   */
  getStorageProfiles(): Array<string> {
    return this._apiVm.storage_profiles;
  }

  /**
   * Gets the power status of the VM.
   * @returns {VmPowerStatus} power status identifier
   */
  getPowerStatus(): VmPowerStatus {
    switch (this._apiVm.status) {
      case ApiVmStatus.POWERED_OFF:
        if (this._apiVm.deployed) {
          return VmPowerStatus.PARTIALLY_POWERED_OFF;
        } else {
          return VmPowerStatus.POWERED_OFF;
        }
      case ApiVmStatus.INCONSISTENT_STATE:
        return VmPowerStatus.INCONSISTENT_STATE;
      case ApiVmStatus.MIXED:
        return VmPowerStatus.MIXED;
      case ApiVmStatus.POWERED_ON:
        return VmPowerStatus.POWERED_ON;
      case ApiVmStatus.SUSPENDED:
        return VmPowerStatus.SUSPENDED;
      case ApiVmStatus.UNRECOGNIZED:
        return VmPowerStatus.UNRECOGNIZED;
      case ApiVmStatus.UNRESOLVED:
        return VmPowerStatus.UNRESOLVED;
      case ApiVmStatus.WAITING_FOR_INPUT:
        return VmPowerStatus.WAITING_FOR_INPUT;
      case ApiVmStatus.FAILED_CREATION:
        return VmPowerStatus.FAILED_CREATION;
      default:
        return VmPowerStatus.UNKNOWN;
    }
  }

  /**
   * Gets the VM's operating system.
   * @returns {string} operating system
   */
  getOperatingSystem(): string {
    return this._apiVm.os;
  }

  /**
   * Gets the UUID of the Organization that the VM belongs to.
   * @returns {string} Org UUID
   */
  getOrgUuid(): string {
    return this._apiVm.org_uuid;
  }

  /**
   * Gets the datacenter location identifier for the VM.
   * @returns {string} datacenter location ID
   */
  getLocationId(): string {
    return this._apiVm.location_id;
  }

  /**
   * Gets the name of the media that is currently inserted in the VM.
   * @returns {string} the name of the inserted media or null if no media is currently inserted
   */
  getInsertedMediaName(): string | null {
    return this._apiVm.inserted_media_name && this._apiVm.inserted_media_name.length > 0 ?
        this._apiVm.inserted_media_name : null;
  }

  /**
   * Indicates whether there is currently a media inserted in the VM.
   * @returns {boolean} value
   */
  isMediaInserted(): boolean {
    return this._apiVm.media_inserted;
  }

  /**
   * Gets the VM's hardware version.
   * @returns {string} hardware version
   */
  getHardwareVersion(): string {
    return this._apiVm.hardware_version;
  }

  /**
   * Gets the VM's description.
   * @returns {string} description
   */
  getDescription(): string {
    return this._apiVm.description;
  }

  /**
   * Indicates whether the VM is deployed.
   * @returns {boolean} value
   */
  isDeployed(): boolean {
    return this._apiVm.deployed;
  }

  /**
   * Gets the date that the VM was created.
   * @returns {Date} creation date
   */
  getCreatedDate(): Date|null {
    return this._apiVm.created_date !== null ? new Date(this._apiVm.created_date) : null;
  }

  /**
   * Gets the number of CPUs for the VM.
   * @returns {number} number of CPUs
   */
  getNumberOfCpus(): number {
    return this._apiVm.cpus_number;
  }

  /**
   * Gets the number of cores per CPU socket.
   * @returns {number} cores per CPU socket
   */
  getCoresPerSocket(): number {
    return this._apiVm.cores_per_socket;
  }

  /**
   * Gets the VM's configured memory in MB.
   * @returns {number} the VM's configured memory in MB.
   */
  getMemorySize(): number {
    return this._apiVm.memory_size;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiVm, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {ApiVm} the API VM object
   */
  getJson(): ApiVm {
    return Object.assign({}, this._apiVm);
  }

  /**
   * Refreshes the VM data by retrieving it from the API again.
   * @returns {Promise<Vm>}
   */
  async refresh(): Promise<Vm> {
    let self = this;
    return Iland.getHttp().get(
        `/vm/${self.getUuid()}`).then(function(response) {
          self._apiVm = response.data as ApiVm;
          return self;
        });
  }

  /**
   * Gets the list of VNICs for this VM.
   * @returns {Promise<Vnic[]>}
   */
  async getVnics(): Promise<Array<Vnic>> {
    let self = this;
    return Iland.getHttp().get(
        `/vm/${self.getUuid()}/vnics`).then(function(response) {
          let apiVnics = response.data as Array<ApiVnic>;
          return apiVnics.map((apiVnic) => new Vnic(apiVnic));
        });
  }

  /**
   * Updates the VM's description.
   * @param description the new description
   * @returns {Promise<Task>} task promise
   */
  async updateDescription(description: string): Promise<Task> {
    let self = this;
    let spec: VmUpdateDescriptionSpec = {
      description: description
    };
    return Iland.getHttp().put(`/vm/${self.getUuid()}/description`, spec)
                .then(function(response) {
                  let apiTask = response.data as ApiTask;
                  return new Task(apiTask);
                });
  }

  /**
   * Edit the memory size of the VM.
   * @param memorySizeMb {number} the new memory size in MB
   * @returns {Promise<Task>} task promise
   */
  async updateMemorySize(memorySizeMb: number): Promise<Task> {
    let self = this;
    let spec: VmMemoryUpdateSpec = {
      memory_size: String(memorySizeMb)
    };
    return Iland.getHttp().put(`/vm/${self.getUuid()}/mem`, spec)
                .then(function(response) {
                  let apiTask = response.data as ApiTask;
                  return new Task(apiTask);
                });
  }

  /**
   * Edit the number of CPUs.
   * @param spec {VmCpuUpdateSpec} specifying new number of CPUs
   * @returns {Promise<Task>} task promise
   */
  async updateNumberOfCpus(spec: VmCpuUpdateSpec): Promise<Task> {
    let self = this;
    return Iland.getHttp().put(`/vm/${self.getUuid()}/cpu`, spec)
                .then(function(response) {
                  let apiTask = response.data as ApiTask;
                  return new Task(apiTask);
                });
  }

}

/**
 * Specification for VM memory configuration update request.
 */
interface VmMemoryUpdateSpec {
  memory_size: string;
}

/**
 * Specification for VM description update request.
 */
interface VmUpdateDescriptionSpec {
  description: string;
}

/**
 * Specification for VM CPU configuration update request.
 */
export interface VmCpuUpdateSpec {
  cpus_number: number;
  cores_per_socket?: number;
}