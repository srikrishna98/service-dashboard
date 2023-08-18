// eslint-disable-next-line import/prefer-default-export
export const logsData = [
    {
        title: 'Service 1',
        log: `2015-10-18 18:01:47,978 INFO [main] org.apache.hadoop.mapreduce.v2.app.MRAppMaster: Created MRAppMaster
                                    for application appattempt_1445144423722_0020_000001 2015-10-18 18:01:48,963 INFO [main]
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster: Executing with tokens: 2015-10-18 18:01:49,228 INFO
                                    [main] org.apache.hadoop.mapreduce.v2.app.MRAppMaster: Using mapred newApiCommitter. 2015-10-18
                                    18:01:50,353 INFO [main] org.apache.hadoop.mapreduce.v2.app.MRAppMaster: OutputCommitter set in config
                                    null 2015-10-18 18:01:50,509 INFO [main] org.apache.hadoop.mapreduce.v2.app.MRAppMaster: OutputCommitter
                                    is org.apache.hadoop.mapreduce.lib.output.FileOutputCommitter 2015-10-18 18:01:50,556 INFO [main]
                                    org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.jobhistory.EventType for class
                                    org.apache.hadoop.mapreduce.jobhistory.JobHistoryEventHandler 2015-10-18 18:01:50,556 INFO [main]
                                    org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.job.event.JobEventType for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$JobEventDispatcher 2015-10-18 18:01:50,556 INFO [main]
                                    org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.job.event.TaskEventType for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$TaskEventDispatcher 2015-10-18 18:01:50,556 INFO [main]
                                    org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.job.event.TaskAttemptEventType for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$TaskAttemptEventDispatcher 2015-10-18 18:01:50,572 INFO
                                    [main] org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.commit.CommitterEventType for class
                                    org.apache.hadoop.mapreduce.v2.app.commit.CommitterEventHandler 2015-10-18 18:01:50,572 INFO [main]
                                    org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.speculate.Speculator$EventType for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$SpeculatorEventDispatcher 2015-10-18 18:01:50,572 INFO
                                    [main] org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.rm.ContainerAllocator$EventType for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$ContainerAllocatorRouter 2015-10-18 18:01:50,588 INFO
                                    [main] org.apache.hadoop.yarn.event.AsyncDispatcher: Registering class
                                    org.apache.hadoop.mapreduce.v2.app.launcher.ContainerLauncher$EventType for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$ContainerLauncherRouter 2015-10-18 18:01:50,634 INFO
                                    [main] org.apache.hadoop.mapreduce.v2.jobhistory.JobHistoryUtils: Default file system
                                    [hdfs://msra-sa-41:9000] 2015-10-18 18:01:50,666 INFO [main]
                                    org.apache.hadoop.mapreduce.v2.jobhistory.JobHistoryUtils: Default file system [hdfs://msra-sa-41:9000]
                                    2015-10-18 18:01:50,713 INFO [main] org.apache.hadoop.mapreduce.v2.jobhistory.JobHistoryUtils: Default
                                    file system [hdfs://msra-sa-41:9000] 2015-10-18 18:01:50,728 INFO [main]
                                    org.apache.hadoop.mapreduce.jobhistory.JobHistoryEventHandler: Emitting job history data to the timeline
                                    server is not enabled 2015-10-18 18:01:50,806 INFO [main] org.apache.hadoop.yarn.event.AsyncDispatcher:
                                    Registering class org.apache.hadoop.mapreduce.v2.app.job.event.JobFinishEvent$Type for class
                                    org.apache.hadoop.mapreduce.v2.app.MRAppMaster$JobFinishEventHandler 2015-10-18 18:01:51,197 INFO [main]
                                    org.apache.hadoop.metrics2.impl.MetricsConfig: loaded properties from hadoop-metrics2.properties
                                    2015-10-18 18:01:51,306 INFO [main] org.apache.hadoop.metrics2.impl.MetricsSystemImpl: Scheduled
                                    snapshot period at 10 second(s). 2015-10-18 18:01:51,306 INFO [main]
                                    org.apache.hadoop.metrics2.impl.MetricsSystemImpl: MRAppMaster metrics system started 2015-10-18
                                    18:01:51,322 INFO [main] org.apache.hadoop.mapreduce.v2.app.job.impl.JobImpl: Adding job token for
                                    job_1445144423722_0020 to jobTokenSecretManager`
    },
    {
        title: 'Service 2',
        log: `Dec 10 06:55:46 LabSZ sshd[24200]: reverse mapping checking getaddrinfo for ns.marryaldkfaczcz.com [173.234.31.186] failed - POSSIBLE BREAK-IN ATTEMPT!
                Dec 10 06:55:46 LabSZ sshd[24200]: Invalid user webmaster from 173.234.31.186
                Dec 10 06:55:46 LabSZ sshd[24200]: input_userauth_request: invalid user webmaster [preauth]
                Dec 10 06:55:46 LabSZ sshd[24200]: pam_unix(sshd:auth): check pass; user unknown
                Dec 10 06:55:46 LabSZ sshd[24200]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=173.234.31.186 
                Dec 10 06:55:48 LabSZ sshd[24200]: Failed password for invalid user webmaster from 173.234.31.186 port 38926 ssh2
                Dec 10 06:55:48 LabSZ sshd[24200]: Connection closed by 173.234.31.186 [preauth]
                Dec 10 07:02:47 LabSZ sshd[24203]: Connection closed by 212.47.254.145 [preauth]
                Dec 10 07:07:38 LabSZ sshd[24206]: Invalid user test9 from 52.80.34.196
                Dec 10 07:07:38 LabSZ sshd[24206]: input_userauth_request: invalid user test9 [preauth]
                Dec 10 07:07:38 LabSZ sshd[24206]: pam_unix(sshd:auth): check pass; user unknown
                Dec 10 07:07:38 LabSZ sshd[24206]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=ec2-52-80-34-196.cn-north-1.compute.amazonaws.com.cn 
                Dec 10 07:07:45 LabSZ sshd[24206]: Failed password for invalid user test9 from 52.80.34.196 port 36060 ssh2
                Dec 10 07:07:45 LabSZ sshd[24206]: Received disconnect from 52.80.34.196: 11: Bye Bye [preauth]
                Dec 10 07:08:28 LabSZ sshd[24208]: reverse mapping checking getaddrinfo for ns.marryaldkfaczcz.com [173.234.31.186] failed - POSSIBLE BREAK-IN ATTEMPT!
                Dec 10 07:08:28 LabSZ sshd[24208]: Invalid user webmaster from 173.234.31.186
                Dec 10 07:08:28 LabSZ sshd[24208]: input_userauth_request: invalid user webmaster [preauth]
                Dec 10 07:08:28 LabSZ sshd[24208]: pam_unix(sshd:auth): check pass; user unknown
                Dec 10 07:08:28 LabSZ sshd[24208]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=173.234.31.186 
                Dec 10 07:08:30 LabSZ sshd[24208]: Failed password for invalid user webmaster from 173.234.31.186 port 39257 ssh2
                Dec 10 07:08:30 LabSZ sshd[24208]: Connection closed by 173.234.31.186 [preauth]
                Dec 10 07:11:42 LabSZ sshd[24224]: Invalid user chen from 202.100.179.208
                Dec 10 07:11:42 LabSZ sshd[24224]: input_userauth_request: invalid user chen [preauth]
                Dec 10 07:11:42 LabSZ sshd[24224]: pam_unix(sshd:auth): check pass; user unknown
                Dec 10 07:11:42 LabSZ sshd[24224]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=202.100.179.208 `
    },
    {
        title: 'Service 3',
        log: `17/06/09 20:10:40 INFO executor.CoarseGrainedExecutorBackend: Registered signal handlers for [TERM, HUP, INT]
                17/06/09 20:10:40 INFO spark.SecurityManager: Changing view acls to: yarn,curi
                17/06/09 20:10:40 INFO spark.SecurityManager: Changing modify acls to: yarn,curi
                17/06/09 20:10:40 INFO spark.SecurityManager: SecurityManager: authentication disabled; ui acls disabled; users with view permissions: Set(yarn, curi); users with modify permissions: Set(yarn, curi)
                17/06/09 20:10:41 INFO spark.SecurityManager: Changing view acls to: yarn,curi
                17/06/09 20:10:41 INFO spark.SecurityManager: Changing modify acls to: yarn,curi
                17/06/09 20:10:41 INFO spark.SecurityManager: SecurityManager: authentication disabled; ui acls disabled; users with view permissions: Set(yarn, curi); users with modify permissions: Set(yarn, curi)
                17/06/09 20:10:41 INFO slf4j.Slf4jLogger: Slf4jLogger started
                17/06/09 20:10:41 INFO Remoting: Starting remoting
                17/06/09 20:10:41 INFO Remoting: Remoting started; listening on addresses :[akka.tcp://sparkExecutorActorSystem@mesos-slave-07:55904]
                17/06/09 20:10:41 INFO util.Utils: Successfully started service 'sparkExecutorActorSystem' on port 55904.
                17/06/09 20:10:41 INFO storage.DiskBlockManager: Created local directory at /opt/hdfs/nodemanager/usercache/curi/appcache/application_1485248649253_0147/blockmgr-70293f72-844a-4b39-9ad6-fb0ad7e364e4
                17/06/09 20:10:41 INFO storage.MemoryStore: MemoryStore started with capacity 17.7 GB
                17/06/09 20:10:42 INFO executor.CoarseGrainedExecutorBackend: Connecting to driver: spark://CoarseGrainedScheduler@10.10.34.11:48069
                17/06/09 20:10:42 INFO executor.CoarseGrainedExecutorBackend: Successfully registered with driver
                17/06/09 20:10:42 INFO executor.Executor: Starting executor ID 5 on host mesos-slave-07
                17/06/09 20:10:42 INFO util.Utils: Successfully started service 'org.apache.spark.network.netty.NettyBlockTransferService' on port 40984.
                17/06/09 20:10:42 INFO netty.NettyBlockTransferService: Server created on 40984
                17/06/09 20:10:42 INFO storage.BlockManagerMaster: Trying to register BlockManager
                17/06/09 20:10:42 INFO storage.BlockManagerMaster: Registered BlockManager
                17/06/09 20:10:45 INFO executor.CoarseGrainedExecutorBackend: Got assigned task 0
                17/06/09 20:10:45 INFO executor.CoarseGrainedExecutorBackend: Got assigned task 1
                17/06/09 20:10:45 INFO executor.CoarseGrainedExecutorBackend: Got assigned task 2
                17/06/09 20:10:45 INFO executor.CoarseGrainedExecutorBackend: Got assigned task 3
                17/06/09 20:10:45 INFO executor.Executor: Running task 0.0 in stage 0.0 (TID 0)
                17/06/09 20:10:45 INFO executor.Executor: Running task 2.0 in stage 0.0 (TID 2)
                17/06/09 20:10:45 INFO executor.Executor: Running task 1.0 in stage 0.0 (TID 1)
                17/06/09 20:10:45 INFO executor.Executor: Running task 3.0 in stage 0.0 (TID 3)
                17/06/09 20:10:45 INFO executor.CoarseGrainedExecutorBackend: Got assigned task 4
                17/06/09 20:10:45 INFO executor.Executor: Running task 4.0 in stage 0.0 (TID 4)
                17/06/09 20:10:45 INFO broadcast.TorrentBroadcast: Started reading broadcast variable 9
                17/06/09 20:10:45 INFO storage.MemoryStore: Block broadcast_9_piece0 stored as bytes in memory (estimated size 5.2 KB, free 5.2 KB)
                17/06/09 20:10:45 INFO broadcast.TorrentBroadcast: Reading broadcast variable 9 took 160 ms
                17/06/09 20:10:46 INFO storage.MemoryStore: Block broadcast_9 stored as values in memory (estimated size 8.8 KB, free 14.0 KB)
                17/06/09 20:10:46 INFO spark.CacheManager: Partition rdd_2_1 not found, computing it
                17/06/09 20:10:46 INFO spark.CacheManager: Partition rdd_2_3 not found, computing it
                17/06/09 20:10:46 INFO spark.CacheManager: Partition rdd_2_0 not found, computing it
                17/06/09 20:10:46 INFO spark.CacheManager: Partition rdd_2_2 not found, computing it
                17/06/09 20:10:46 INFO spark.CacheManager: Partition rdd_2_4 not found, computing it`
    },
    {
        title: 'Service 4',
        log: `03-17 16:13:38.811  1702  2395 D WindowManager: printFreezingDisplayLogsopening app wtoken = AppWindowToken{9f4ef63 token=Token{a64f992 ActivityRecord{de9231d u0 com.tencent.qt.qtl/.activity.info.NewsDetailXmlActivity t761}}}, allDrawn= false, startingDisplayed =  false, startingMoved =  false, isRelaunching =  false
                03-17 16:13:38.819  1702  8671 D PowerManagerService: acquire lock=233570404, flags=0x1, tag="View Lock", name=com.android.systemui, ws=null, uid=10037, pid=2227
                03-17 16:13:38.820  1702  8671 D PowerManagerService: ready=true,policy=3,wakefulness=1,wksummary=0x23,uasummary=0x1,bootcompleted=true,boostinprogress=false,waitmodeenable=false,mode=false,manual=38,auto=-1,adj=0.0userId=0
                03-17 16:13:38.839  1702  2113 V WindowManager: Skipping AppWindowToken{df0798e token=Token{78af589 ActivityRecord{3b04890 u0 com.tencent.qt.qtl/com.tencent.video.player.activity.PlayerActivity t761}}} -- going to hide
                03-17 16:13:38.859  2227  2227 D TextView: visible is system.time.showampm
                03-17 16:13:38.861  2227  2227 D TextView: mVisiblity.getValue is false
                03-17 16:13:38.869  2227  2227 D TextView: visible is system.charge.show
                03-17 16:13:38.871  2227  2227 D TextView: mVisiblity.getValue is false
                03-17 16:13:38.875  2227  2227 D TextView: visible is system.call.count gt 0
                03-17 16:13:38.877  2227  2227 D TextView: mVisiblity.getValue is false
                03-17 16:13:38.881  2227  2227 D TextView: visible is system.message.count gt 0
                03-17 16:13:38.882  2227  2227 D TextView: mVisiblity.getValue is false
                03-17 16:13:38.887  2227  2227 D TextView: visible is system.ownerinfo.show
                03-17 16:13:38.888  2227  2227 D TextView: mVisiblity.getValue is false
                03-17 16:13:38.905  1702 10454 D PowerManagerService: release:lock=233570404, flg=0x0, tag="View Lock", name=com.android.systemui", ws=null, uid=10037, pid=2227
                03-17 16:13:38.907  1702 10454 D PowerManagerService: ready=true,policy=3,wakefulness=1,wksummary=0x23,uasummary=0x1,bootcompleted=true,boostinprogress=false,waitmodeenable=false,mode=false,manual=38,auto=-1,adj=0.0userId=0
                03-17 16:13:38.915  1702  3693 V WindowManager: Skipping AppWindowToken{df0798e token=Token{78af589 ActivityRecord{3b04890 u0 com.tencent.qt.qtl/com.tencent.video.player.activity.PlayerActivity t761}}} -- going to hide
                03-17 16:13:38.928  2227  2227 I StackScrollAlgorithm: updateClipping isOverlap:false, getTopPadding=333.0, Translation=-24.0
                03-17 16:13:38.928  2227  2227 I StackScrollAlgorithm: updateDimmedActivatedHideSensitive overlap:false`
    }
];
