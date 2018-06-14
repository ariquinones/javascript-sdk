import { VappCopyMoveRequestJson } from './__json__/vapp-copy-move-request-json';
import { VappChildVmCopyMoveRequest } from './vapp-child-vm-copy-move-request';
import { VappChildVmCopyMoveRequestJson } from './__json__/vapp-child-vm-copy-move-request-json';

/**
 * vApp copy move request.
 */
/* istanbul ignore next: autogenerated */
export class VappCopyMoveRequest {

  private readonly _json: VappCopyMoveRequestJson;

  constructor(vappCopyMoveRequest: VappCopyMoveRequest);
  constructor(vappCopyMoveRequestJson: VappCopyMoveRequestJson);
  constructor(name: string, description: string, vmSpecs: Array<VappChildVmCopyMoveRequestJson>, vdcUuid: string);
  constructor(firstParam: string | VappCopyMoveRequest | VappCopyMoveRequestJson, description?: string,
              vmSpecs?: Array<VappChildVmCopyMoveRequestJson>, vdcUuid?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        vm_specs: vmSpecs,
        vdc_uuid: vdcUuid
      } as VappCopyMoveRequestJson;
    } else if (firstParam instanceof VappCopyMoveRequest) {
      // Copy constructor
      this._json = (firstParam as VappCopyMoveRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VappCopyMoveRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get vm specs.
   * @returns {Array<VappChildVmCopyMoveRequest>}
   */
  get vmSpecs(): Array<VappChildVmCopyMoveRequest> {
    return this._json.vm_specs.map(it => new VappChildVmCopyMoveRequest(it));
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappCopyMoveRequestJson}
   */
  get json(): VappCopyMoveRequestJson {
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
