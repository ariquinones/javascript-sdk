import {
  DistributedFirewallLayer3RuleUpdateRequestJson
} from './__json__/distributed-firewall-layer3-rule-update-request-json';
import { DistributedFirewallPacketType } from './distributed-firewall-packet-type';
import { DistributedFirewallDirectionType } from './distributed-firewall-direction-type';
import { DistributedFirewallActionType } from './distributed-firewall-action-type';
import { DistributedFirewallValueTypeRequest } from './distributed-firewall-value-type-request';
import { DistributedFirewallRuleServiceProtocolRequest } from './distributed-firewall-rule-service-protocol-request';

/* istanbul ignore next: autogenerated */
export class DistributedFirewallLayer3RuleUpdateRequest {

  private readonly _json: DistributedFirewallLayer3RuleUpdateRequestJson;

  constructor(distributedFirewallLayer3RuleUpdateRequest: DistributedFirewallLayer3RuleUpdateRequest);
  constructor(distributedFirewallLayer3RuleUpdateRequestJson: DistributedFirewallLayer3RuleUpdateRequestJson);
  constructor(firstParam: DistributedFirewallLayer3RuleUpdateRequest | DistributedFirewallLayer3RuleUpdateRequestJson) {
    if (firstParam instanceof DistributedFirewallLayer3RuleUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as DistributedFirewallLayer3RuleUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as DistributedFirewallLayer3RuleUpdateRequestJson;
    }
  }

  /**
   * Get id.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Get disabled.
   * @returns {boolean}
   */
  get disabled(): boolean {
    return this._json.disabled;
  }

  /**
   * Get logged.
   * @returns {boolean}
   */
  get logged(): boolean {
    return this._json.logged;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get action.
   * @returns {DistributedFirewallActionType}
   */
  get action(): DistributedFirewallActionType {
    return this._json.action;
  }

  /**
   * Get applied to list.
   * @returns {Array<DistributedFirewallValueTypeRequest>}
   */
  get appliedToList(): Array<DistributedFirewallValueTypeRequest> {
    return (this._json.applied_to_list || []).map(it => new DistributedFirewallValueTypeRequest(it));
  }

  /**
   * Get sources excluded.
   * @returns {boolean}
   */
  get sourcesExcluded(): boolean {
    return this._json.sources_excluded;
  }

  /**
   * Get sources.
   * @returns {Array<DistributedFirewallValueTypeRequest>}
   */
  get sources(): Array<DistributedFirewallValueTypeRequest> {
    return (this._json.sources || []).map(it => new DistributedFirewallValueTypeRequest(it));
  }

  /**
   * Get destinations excluded.
   * @returns {boolean}
   */
  get destinationsExcluded(): boolean {
    return this._json.destinations_excluded;
  }

  /**
   * Get destinations.
   * @returns {Array<DistributedFirewallValueTypeRequest>}
   */
  get destinations(): Array<DistributedFirewallValueTypeRequest> {
    return (this._json.destinations || []).map(it => new DistributedFirewallValueTypeRequest(it));
  }

  /**
   * Get service objects.
   * @returns {Array<DistributedFirewallValueTypeRequest>}
   */
  get serviceObjects(): Array<DistributedFirewallValueTypeRequest> {
    return (this._json.service_objects || []).map(it => new DistributedFirewallValueTypeRequest(it));
  }

  /**
   * Get service protocols.
   * @returns {Array<DistributedFirewallRuleServiceProtocolRequest>}
   */
  get serviceProtocols(): Array<DistributedFirewallRuleServiceProtocolRequest> {
    return (this._json.service_protocols || []).map(it => new DistributedFirewallRuleServiceProtocolRequest(it));
  }

  /**
   * Get direction.
   * @returns {DistributedFirewallDirectionType}
   */
  get direction(): DistributedFirewallDirectionType {
    return this._json.direction;
  }

  /**
   * Get packet type.
   * @returns {DistributedFirewallPacketType}
   */
  get packetType(): DistributedFirewallPacketType {
    return this._json.packet_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {DistributedFirewallLayer3RuleUpdateRequestJson}
   */
  get json(): DistributedFirewallLayer3RuleUpdateRequestJson {
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