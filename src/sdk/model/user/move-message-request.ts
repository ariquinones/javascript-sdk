import { MoveMessageRequestJson } from './__json__/move-message-request-json';
import { MessageFolder } from './__json__/message-folder';

/**
 * Move Message Request.
 */
/* istanbul ignore next: autogenerated */
export class MoveMessageRequest {

  private readonly _json: MoveMessageRequestJson;

  constructor(moveMessageRequest: MoveMessageRequest);
  constructor(moveMessageRequestJson: MoveMessageRequestJson);
  constructor(folder: MessageFolder);
  constructor(firstParam: MessageFolder | MoveMessageRequest | MoveMessageRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        folder: firstParam
      } as MoveMessageRequestJson;
    } else if (firstParam instanceof MoveMessageRequest) {
      // Copy constructor
      this._json = (firstParam as MoveMessageRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as MoveMessageRequestJson;
    }
  }

  /**
   * Get folder.
   * @returns {MessageFolder}
   */
  get folder(): MessageFolder {
    return this._json.folder;
  }

  /**
   * Get the json representation of this class.
   * @returns {MoveMessageRequestJson}
   */
  get json(): MoveMessageRequestJson {
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