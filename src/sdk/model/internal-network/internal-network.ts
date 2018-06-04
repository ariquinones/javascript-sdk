import { InternalNetworkJson } from './__json__/internal-network-json';
import { Iland } from '../../iland';
import { AbstractNetwork } from './abstract-network';
import { EntityType } from '../common/__json__/entity-type';

/**
 * Internal Network.
 */
export class InternalNetwork extends AbstractNetwork {

  constructor(_json: InternalNetworkJson) {
    super(_json);
  }

  /**
   * Gets an internal network by UUID.
   * @param uuid internal network UUID
   * @returns {Promise<InternalNetwork>} promise that resolves with the internal network
   */
  static async getInternalNetwork(uuid: string): Promise<InternalNetwork> {
    return Iland.getHttp().get(`/org-vdc-networks/${uuid}`).then((response) => {
      const json = response.data as InternalNetworkJson;
      return new InternalNetwork(json);
    });
  }

  get entityType(): EntityType {
    return 'IAAS_INTERNAL_NETWORK';
  }

  /**
   * Gets the UUID of the edge gateway that the network is connected to, if its a NAT routed network or null otherwise.
   * @returns {string|null} edge gateway UUID or null
   */
  get edgeUuid(): string | null {
    return (this._json as InternalNetworkJson).edge_uuid;
  }

  /**
   * Indicates whether this network is shared with other vDCs within the same organization.
   * @returns {boolean} value
   */
  get shared(): boolean {
    return (this._json as InternalNetworkJson).shared;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {InternalNetworkJson} the API __json__ object
   */
  get json(): InternalNetworkJson {
    return Object.assign({}, this._json as InternalNetworkJson);
  }

  /**
   * Refreshes the internal network data by retrieving it from the API again.
   * @returns {Promise<InternalNetwork>} promise that resolves with this object
   */
  async refresh(): Promise<InternalNetwork> {
    return Iland.getHttp().get(`/org-vdc-networks/${this.uuid}`).then((response) => {
      this._json = response.data as InternalNetworkJson;
      return this;
    });
  }

}
