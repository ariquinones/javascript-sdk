import {
  GroupSelectedItem,
  O365CreateJobRequestJson,
  PartialOrganizationSelectedItem, SiteSelectedItem, UserSelectedItem
} from './__json__/o365-create-job-request-json';
import { O365JobBackupType } from './__json__/o365-job-json';
import { O365JobSchedulePolicyRequest } from './o365-job-schedule-policy-request';

/**
 * O365 Create Job Request
 */
/* istanbul ignore next: autogenerated */
export class O365CreateJobRequest {

  constructor(private _json: O365CreateJobRequestJson) {
  }

  /**
   * Get O365 Job creation request name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get O365 Job creation request description
   */
  get description(): string | undefined {
    return this._json.description;
  }

  /**
   * Get the O365 Job creation request repo id
   */
  get repositoryId(): string {
    return this._json.repository_id;
  }

  /**
   * Get O365 Job creation request backup type
   */
  get backupType(): O365JobBackupType {
    return this._json.backup_type;
  }

  /**
   * Get O365 Job creation request run now status
   */
  get runNow(): boolean {
    return this._json.run_now;
  }

  /**
   * Get O365 Job creation request job schedule request
   */
  get jobScheduleRequest(): O365JobSchedulePolicyRequest {
    return new O365JobSchedulePolicyRequest(this._json.job_schedule_policy_request);
  }

  /**
   * Get O365 Job creation request selected items request
   */
  get selectedItemsRequest(): Array<PartialOrganizationSelectedItem |
      GroupSelectedItem | UserSelectedItem | SiteSelectedItem> | undefined {
        return this._json.o365_job_selected_item_requests;
      }

  /**
   * Get O365 Job creation request excluded items request
   */
  get excludedItemsRequest(): Array<PartialOrganizationSelectedItem |
      GroupSelectedItem | UserSelectedItem | SiteSelectedItem> | undefined {
        return this._json.o365_job_excluded_item_requests;
      }

  /**
   * Get the json representation of this class.
   * @returns {O365CreateJobRequestJson}
   */
  get json(): O365CreateJobRequestJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}