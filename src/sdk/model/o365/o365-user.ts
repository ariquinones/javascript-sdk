import { O365UserJson } from './__json__/o365-user-json';

/**
 * O365 User
 */
/* istanbul ignore next: autogenerated */
export class O365User {

  constructor(private _json: O365UserJson) {
  }

  /**
   * Get the O365 User display name
   * @returns {string}
   */
  get displayName(): string {
    return this._json.display_name;
  }

  /**
   * Get the O365 user organization's name
   * @returns {string}
   */
  get organizationName(): string {
    return this._json.organization_name;
  }

  /**
   * Get the O365 VBO Organization iland platform UUID
   * @returns {string}
   */
  get organizationUuid(): string {
    return this._json.organization_uuid;
  }

  /**
   * Get the O365 user type
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get whether the Office 365 user is backed up
   * @returns {boolean}
   */
  get isBackedUp(): boolean {
    return this._json.is_backed_up;
  }

  /**
   * Get whether the O365 user is archived
   * @returns {boolean} true for inactive, false for active
   */
  get archived(): boolean {
    return this._json.archived;
  }

  /**
   * Get whether the Office 365 user has been deleted from the Office 365 organization
   * @deprecated Replaced by O365User.archived
   * @returns {boolean}
   */
  get isDeletedFromOrg(): boolean {
    return this._json.is_deleted_from_org;
  }

  /**
   * Get the native id of O365 user
   * @returns {string}
   */
  get nativeId(): string {
    return this._json.native_id;
  }

  /**
   * Get O365 user's name
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365UserJson}
   */
  get json(): O365UserJson {
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
