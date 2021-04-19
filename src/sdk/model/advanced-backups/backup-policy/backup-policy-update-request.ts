import { BackupPolicyUpdateRequestJson } from './__json__/backup-policy-update-request-json';
import { BlackoutPeriodJson } from './__json__/blackout-period-json';
import { ExtendedRetentionPolicyJson } from './__json__/extended-retention-policy-json';
import { SchedulingPolicyJson } from './__json__/scheduling-policy-json';
import { SnapshotArchivalCopyPolicyJson } from './__json__/snapshot-archival-copy-policy-json';
import { SnapshotReplicationCopyPolicyJson } from './__json__/snapshot-replication-copy-policy-json';
import { BlackoutPeriod } from './blackout-period';
import { ExtendedRetentionPolicy } from './extended-retention-policy';
import { SchedulingPolicy } from './scheduling-policy';
import { SnapshotArchivalCopyPolicy } from './snapshot-archival-copy-policy';
import { SnapshotReplicationCopyPolicy } from './snapshot-replication-copy-policy';

/**
 * Backup Policy Update Request.
 */
/* istanbul ignore next: autogenerated */
export class BackupPolicyUpdateRequest {

  private readonly _json: BackupPolicyUpdateRequestJson;

  constructor(backupPolicyUpdateRequest: BackupPolicyUpdateRequest);
  constructor(backupPolicyUpdateRequestJson: BackupPolicyUpdateRequestJson);
  constructor(blackoutPeriods: Array<BlackoutPeriodJson>, daysToKeep: number, daysToKeepLog: number,
              description: string, extendedRetentionPolicies: Array<ExtendedRetentionPolicyJson>,
              fullSchedulingPolicy: SchedulingPolicyJson, incrementalSchedulingPolicy: SchedulingPolicyJson,
              logSchedulingPolicy: SchedulingPolicyJson, name: string, retries: number, retryIntervalMins: number,
              skipIntervalMins: number, snapshotArchivalCopyPolicies: Array<SnapshotArchivalCopyPolicyJson>,
              snapshotReplicationCopyPolicies: Array<SnapshotReplicationCopyPolicyJson>);
  constructor(firstParam: Array<BlackoutPeriodJson> | BackupPolicyUpdateRequest | BackupPolicyUpdateRequestJson,
              daysToKeep?: number, daysToKeepLog?: number, description?: string,
              extendedRetentionPolicies?: Array<ExtendedRetentionPolicyJson>,
              fullSchedulingPolicy?: SchedulingPolicyJson, incrementalSchedulingPolicy?: SchedulingPolicyJson,
              logSchedulingPolicy?: SchedulingPolicyJson, name?: string, retries?: number, retryIntervalMins?: number,
              skipIntervalMins?: number, snapshotArchivalCopyPolicies?: Array<SnapshotArchivalCopyPolicyJson>,
              snapshotReplicationCopyPolicies?: Array<SnapshotReplicationCopyPolicyJson>) {
    if (Array.isArray(firstParam)) {
      // Parameters constructor
      this._json = {
        blackout_periods: firstParam,
        days_to_keep: daysToKeep,
        days_to_keep_log: daysToKeepLog,
        description: description,
        extended_retention_policies: extendedRetentionPolicies,
        full_scheduling_policy: fullSchedulingPolicy,
        incremental_scheduling_policy: incrementalSchedulingPolicy,
        log_scheduling_policy: logSchedulingPolicy,
        name: name,
        retries: retries,
        retry_interval_mins: retryIntervalMins,
        skip_interval_mins: skipIntervalMins,
        snapshot_archival_copy_policies: snapshotArchivalCopyPolicies,
        snapshot_replication_copy_policies: snapshotReplicationCopyPolicies
      } as BackupPolicyUpdateRequestJson;
    } else if (firstParam instanceof BackupPolicyUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as BackupPolicyUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as BackupPolicyUpdateRequestJson;
    }
  }

  /**
   * Get blackout periods.
   * @returns {Array<BlackoutPeriod>}
   */
  get blackoutPeriods(): Array<BlackoutPeriod> {
    return this._json.blackout_periods?.map(it => new BlackoutPeriod(it));
  }

  /**
   * Get days to keep.
   * @returns {number}
   */
  get daysToKeep(): number {
    return this._json.days_to_keep;
  }

  /**
   * Get days to keep log.
   * @returns {number | null}
   */
  get daysToKeepLog(): number | null {
    return this._json.days_to_keep_log ?? null;
  }

  /**
   * Get description.
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description || null;
  }

  /**
   * Get extended retention policies.
   * @returns {Array<ExtendedRetentionPolicy>}
   */
  get extendedRetentionPolicies(): Array<ExtendedRetentionPolicy> {
    return this._json.extended_retention_policies?.map(it => new ExtendedRetentionPolicy(it));
  }

  /**
   * Get full scheduling policy.
   * @returns {SchedulingPolicy | null}
   */
  get fullSchedulingPolicy(): SchedulingPolicy | null {
    return this._json.full_scheduling_policy
      ? new SchedulingPolicy(this._json.full_scheduling_policy)
      : null;
  }

  /**
   * Get incremental scheduling policy.
   * @returns {SchedulingPolicy}
   */
  get incrementalSchedulingPolicy(): SchedulingPolicy {
    return new SchedulingPolicy(this._json.incremental_scheduling_policy);
  }

  /**
   * Get log scheduling policy.
   * @returns {SchedulingPolicy | null}
   */
  get logSchedulingPolicy(): SchedulingPolicy | null {
    return this._json.log_scheduling_policy
      ? new SchedulingPolicy(this._json.log_scheduling_policy)
      : null;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get retries.
   * @returns {number}
   */
  get retries(): number {
    return this._json.retries;
  }

  /**
   * Get retry interval mins.
   * @returns {number}
   */
  get retryIntervalMins(): number {
    return this._json.retry_interval_mins;
  }

  /**
   * Get skip interval mins.
   * @returns {number | null}
   */
  get skipIntervalMins(): number | null {
    return this._json.skip_interval_mins ?? null;
  }

  /**
   * Get snapshot archival copy policies.
   * @returns {Array<SnapshotArchivalCopyPolicy>}
   */
  get snapshotArchivalCopyPolicies(): Array<SnapshotArchivalCopyPolicy> {
    return this._json.snapshot_archival_copy_policies?.map(it => new SnapshotArchivalCopyPolicy(it));
  }

  /**
   * Get snapshot replication copy policies.
   * @returns {Array<SnapshotReplicationCopyPolicy>}
   */
  get snapshotReplicationCopyPolicies(): Array<SnapshotReplicationCopyPolicy> {
    return this._json.snapshot_replication_copy_policies?.map(it => new SnapshotReplicationCopyPolicy(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupPolicyUpdateRequestJson}
   */
  get json(): BackupPolicyUpdateRequestJson {
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