import { SecurityGroupMemberOptionListJson } from './__json__/security-group-member-option-list-json';
import { SecurityGroupMemberOptionPagingParams } from './security-group-member-option-paging-params';
import { SecurityGroupMemberOption } from './security-group-member-option';

/**
 * Security Group Member Option List
 */
/* istanbul ignore next: autogenerated */
export class SecurityGroupMemberOptionList {

  constructor(private _json: SecurityGroupMemberOptionListJson) {}

  /**
   * Get current page parameters.
   * @returns {SecurityGroupMemberOptionPagingParams}
   */
  get currentPageParameters(): SecurityGroupMemberOptionPagingParams {
    return new SecurityGroupMemberOptionPagingParams(this._json.current_page_parameters);
  }

  /**
   * Get next page parameters.
   * @returns {SecurityGroupMemberOptionPagingParams | null}
   */
  get nextPageParameters(): SecurityGroupMemberOptionPagingParams | null {
    return this._json.next_page_parameters
      ? new SecurityGroupMemberOptionPagingParams(this._json.next_page_parameters)
      : null;
  }

  /**
   * Get total records.
   * @returns {number}
   */
  get totalRecords(): number {
    return this._json.total_records;
  }

  /**
   * Get last page.
   * @returns {boolean}
   */
  get lastPage(): boolean {
    return this._json.last_page;
  }

  /**
   * Get data.
   * @returns {Array<SecurityGroupMemberOption>
   */
  get data(): Array<SecurityGroupMemberOption> {
    return this._json.data.map(it => new SecurityGroupMemberOption(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityGroupMemberOptionListJson}
   */
  get json(): SecurityGroupMemberOptionListJson {
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