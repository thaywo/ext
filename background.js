var UserPool = [],
  TagPool = [],
  TagPoolPinterest = [],
  linkedin_data = [],
  user_stats = [],
  TotalPinterests = [],
  pinterest_data = [],
  CommentPoolPinterest = [],
  PinterestTime,
  PinterestTargets = [],
  twitter_data = [],
  TagPoolLinkedin = [],
  CommentPoolLinkedin = [],
  timing_model = { min: 0, max: 0, long: 0 },
  TotalLinkedins = [],
  loopAccounts = "",
  LinkedinTargets = [],
  TagPoolTinder = [],
  CommentPoolTinder = [],
  hoursLeft = 8,
  allow_local = !1,
  TagPoolTwitter = [],
  CommentPoolTwitter = [],
  instagram_data = [],
  round_robin_twitter = 0,
  round_robin_linkedin = 0,
  loopCount = 0,
  blocked = !1,
  cloud_db = [],
  StartTinderFollow = !1,
  FollowedPoolTinder = [],
  StartTwitterFollow = !1,
  StartTwitterLike = !1,
  MaxTwitterLikes = 300,
  MaxTwitterFollows = 300,
  unfollowInstoo = !0,
  maxPinterests = 300,
  round_robin_facebook = 0,
  StartPinterestFollow = !1,
  StartPinterestLike = !1,
  MaxPinterestLikes = 300,
  MaxPinterestFollows = 300,
  last_story = "",
  StartLinkedinFollow = !1,
  StartLinkedinLike = !1,
  MaxLinkedinLikes = 300,
  MaxLinkedinFollows = 300,
  firstTime = !0,
  MaxTinderFollows = 300,
  TinderTargets = [],
  CommentedMediaTinder = [],
  StartTinderComment = !1,
  StartTinderLike = !1,
  MaxTinderLikes = 300,
  MaxTinderComments = 300,
  round_robin_hashtag = 0,
  round_robin_account = 0,
  last_tab,
  addIdeal = !1,
  CommentPool = [],
  AccountPool = [],
  FollowedPool = [],
  AccountPoolfacebook = [],
  FollowedPoolPinterest = [],
  LikedMediaPinterest = [],
  FollowedPoolLinkedin = [],
  LikedMediaLinkedin = [],
  CommentedPoolTinder = [],
  LikedMediaTinder = [],
  FollowedPoolTwitter = [],
  LikedMediaTwitter = [],
  EnableFilters = !1,
  minPhotos = 1,
  minFollowers = 100,
  minFollowing = 100,
  maxFollowers = 1e5,
  maxFollowing = 1e5,
  UnfollowedPool = [],
  currentSpeed = 1,
  currentSpeedTwitter = 1,
  currentSpeedLinkedin = 1,
  currentSpeedPinterest = 1,
  currentSpeedTinder = 1,
  instagram_tab,
  likeError = 0,
  activeTabe = 0,
  backgroundDMs = !0,
  loaded_cloud = !1,
  AllFollowings = [],
  Whitelist = [],
  LikedMedia = [],
  TwitterLikedMedia = [],
  LinkedinLikedMedia = [],
  PinterestLikedMedia = [],
  TinderLikedMedia = [],
  IdealTargets = [],
  WarmupMode = !1,
  MediaTagTwitter = [],
  MediaTagLinkedin = [],
  MediaTagPinterest = [],
  StoryMedia = [],
  MediaTag1,
  new_accounts = [];
last_story = {};
var myCollectJob = {},
  TotalTwitter = [],
  savedDM = {},
  analytics = [],
  true_analytics = [],
  user_followers = [],
  user_follower_count = 0,
  user_following_count = 0,
  TwitterTargets = [],
  RankedTargets = [],
  StartTwitter = !1,
  StartTinder = !1,
  StartLinkedin = !1,
  StartPinterest = !1,
  stored_accounts = [],
  AccountTargets = [],
  collect_Tags = [],
  recents = [],
  likeCount = 0,
  StoryCount = 0,
  getStats = 0,
  CommentedMedia = [],
  MediaPool = [],
  BasicCollectJobs = [],
  stories = [],
  CollectJobs = [],
  CollectFollowingsJob = {},
  LocationPool = [],
  CurrentUser,
  blacklist = [],
  filters = [],
  my_followers = [],
  slow = !1,
  TrackingTime = 240,
  start_self = !1,
  self_job = {},
  maxFollows = 100,
  run_self = !0,
  maxUnfollows = 100,
  maxLikes = 100,
  maxStories = 1e4,
  maxComments = 10,
  Day = 0,
  followedCount = 0,
  unfollow_mode = !0,
  IsWhitelistFollowings = !1,
  paid_sub = !1,
  FollowSettings = {},
  UnfollowSettings = {},
  CollectFollowers = {},
  CollectFollowings = {},
  LikeSettings = {},
  StorySettings = {},
  TwitterSettings = {},
  TinderSettings = {},
  LinkedinSettings = {},
  PinterestSettings = {},
  CommentSettings = {},
  UnfollowAfterDays = 0,
  reacts = [],
  StartReact = !1,
  StartFollow = !1,
  StartUnfollow = !1,
  StartLike = !1,
  StartStory = !1,
  StartComment = !1,
  StartSchedule = !1,
  StartTime = 0,
  AutoActions = [],
  Duration = 8,
  CollectFollowersTime,
  FollowTime,
  UnfollowTime,
  CollectUsersTime,
  CollectFollowingsTime,
  StatusUpdateTime,
  CheckFollowTime,
  CollectMediaTime,
  CollectAccountTime,
  LikeOrCommentTime,
  StoryTime,
  CommentTime,
  CollectTagsTime,
  CollectAccountsTime,
  RankTime,
  TwitterTime,
  TinderTime,
  LinkedinTime,
  LastUpdateTime = 0,
  StatusUpdateInterval = 0.5,
  CheckFollowPoolInterval = 300,
  IsUserLoggedIn = !1,
  activity_log = "",
  AllContentPorts = [],
  AllLinkedinPorts = [],
  AllTwitterPorts = [],
  AllTinderPorts = [],
  AllPinterestPorts = [],
  ComPortContent,
  ComPortIndex,
  AllTikTokPorts = [],
  TikTokTime,
  MediaTagTikTok = [],
  currentSpeedTikTok = 1,
  TikTokLikedMedia = [],
  StartTikTok = !1,
  TotalTikToks = [],
  TikTokTargets = [],
  maxTikToks = 100,
  TikTokSettings = {},
  FollowedPoolTikTok = [],
  LikedMediaTikTok = [],
  StartTikTokFollow = !1,
  StartTikTokLike = !1,
  MaxTikTokLikes = 300,
  MaxTikTokFollows = 300,
  tiktok_data = [],
  TagPoolTikTok = [],
  CommentPoolTikTok = [],
  ComPortTikTok,
  AllfacebookPorts = [],
  facebookTime,
  MediaTagfacebook = [],
  currentSpeedfacebook = 1,
  facebookLikedMedia = [],
  Startfacebook = !1,
  Totalfacebooks = [],
  facebookTargets = [],
  maxfacebooks = 100,
  facebookSettings = {},
  FollowedPoolfacebook = [],
  LikedMediafacebook = [],
  StartfacebookFollow = !1,
  StartfacebookLike = !1,
  MaxfacebookLikes = 300,
  MaxfacebookFollows = 300,
  facebook_data = [],
  TagPoolfacebook = [],
  CommentPoolfacebook = [],
  ComPortfacebook,
  ComPortLinkedin,
  ComPortPinterest,
  ComPortTwitter,
  ComPortTinder;
function checkObject(a, b) {
  for (var c = 0; c < b.length; c++) if (b[c].target == a) return b[c];
  return [];
}
function TempTimeValues(a, b) {
  this.Time = a;
  this.ErrorTime = b;
  this.Max = 60;
}
function SettingsTimeRanges(a, b, c) {
  this.TimeMin = a;
  this.TimeMax = b;
  this.ErrorTime = c;
}
function SettingsCollects(a, b, c) {
  this.Pool = a;
  this.Interval = b;
  this.ErrorTime = c;
}
function CollectJob(a, b, c, d) {
  this.user_id = a;
  this.cursor_key = b;
  this.eof = c;
  this.user = d;
}
function User(a, b, c, d, f) {
  this.username = a;
  this.user_id = b;
  this.full_name = c;
  this.user_pic_url = d;
  this.followed_time = f;
}
function MediaTagOBJ(a, b, c) {
  this.tag_name = a;
  this.cursor_key = b;
  this.eof = c;
}
$(document).ready(function () {
  $.ajax({
    url: "https://instoo.com/user/CheckWhiteLabel",
    type: "post",
    data: { email: "fnk666@gmail.com" },
    success: function (a) {
      console.log(a);
      10 != a.refunded &&
        (setInterval(UpdateLoop, 1e3),
        (timing_model = { min: a.min, max: a.max, long: a["long"] }));
    },
  });
  SetDefaultSettings();
  SetTempSettings();
});
function SetTempSettings() {
  FollowTime = new TempTimeValues(0, 0);
  UnfollowTime = new TempTimeValues(0, 0);
  CollectUsersTime = new TempTimeValues(0, 0);
  CollectFollowingsTime = new TempTimeValues(0, 0);
  StatusUpdateTime = new TempTimeValues(0, 0);
  CheckFollowTime = new TempTimeValues(0, 0);
  CollectMediaTime = new TempTimeValues(0, 0);
  CollectAccountTime = new TempTimeValues(0, 0);
  LikeOrCommentTime = new TempTimeValues(0, 0);
  StoryTime = new TempTimeValues(0, 0);
  CommentTime = new TempTimeValues(0, 0);
  CollectTagsTime = new TempTimeValues(0, 0);
  CollectAccountsTime = new TempTimeValues(0, 0);
  RankTime = new TempTimeValues(0, 0);
  TikTokTime = new TempTimeValues(0, 0);
  facebookTime = new TempTimeValues(0, 0);
  PinterestTime = new TempTimeValues(0, 0);
  LinkedinTime = new TempTimeValues(0, 0);
  TinderTime = new TempTimeValues(0, 0);
  TwitterTime = new TempTimeValues(0, 0);
  CollectFollowersTime = new TempTimeValues(0, 0);
  LastUpdateTime = new Date().getTime() / 1e3;
}
function SetDefaultSettings() {
  FollowSettings = new SettingsTimeRanges(28, 36, 200);
  UnfollowSettings = new SettingsTimeRanges(48, 58, 200);
  LikeSettings = new SettingsTimeRanges(28, 38, 200);
  StorySettings = new SettingsTimeRanges(18, 120, 200);
  TikTokSettings = new SettingsTimeRanges(20, 25, 200);
  facebookSettings = new SettingsTimeRanges(20, 25, 200);
  PinterestSettings = new SettingsTimeRanges(20, 25, 200);
  LinkedinSettings = new SettingsTimeRanges(20, 25, 200);
  TinderSettings = new SettingsTimeRanges(20, 25, 200);
  TwitterSettings = new SettingsTimeRanges(20, 25, 200);
  CommentSettings = new SettingsTimeRanges(100, 200, 200);
  CollectFollowers = new SettingsCollects(1e3, 60, 200);
  CollectFollowings = new SettingsCollects(1e3, 60, 200);
  UnfollowAfterDays = 0;
}
chrome.runtime.onMessageExternal.addListener(function (a, b, c) {
  OnMessageReceive(a);
  c({ test: a });
});
chrome.runtime.onConnect.addListener(function (a) {
  "instafollow213content" == a.name
    ? ((ComPortContent = a),
      AllContentPorts.push(ComPortContent),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllContentPorts.length; b++)
          if (AllContentPorts[b] == a) {
            AllContentPorts.splice(b, 1);
            break;
          }
        ComPortContent =
          0 == AllContentPorts.length ? null : AllContentPorts[0];
      }),
      a.onMessage.addListener(function (b) {
        ComPortContent = a;
        OnMessageReceive(b);
      }))
    : "linkedin" == a.name
    ? ((ComPortLinkedin = a),
      AllLinkedinPorts.push(ComPortLinkedin),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllLinkedinPorts.length; b++)
          if (AllLinkedinPorts[b] == a) {
            AllLinkedinPorts.splice(b, 1);
            break;
          }
        ComPortLinkedin =
          0 == AllLinkedinPorts.length ? null : AllLinkedinPorts[0];
      }),
      a.onMessage.addListener(OnMessageReceive))
    : "tiktok" == a.name
    ? ((ComPortTikTok = a),
      AllTikTokPorts.push(ComPortTikTok),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllTikTokPorts.length; b++)
          if (AllTikTokPorts[b] == a) {
            AllTikTokPorts.splice(b, 1);
            break;
          }
        ComPortTikTok = 0 == AllTikTokPorts.length ? null : AllTikTokPorts[0];
      }),
      a.onMessage.addListener(OnMessageReceive))
    : "facebook" == a.name
    ? ((ComPortfacebook = a),
      AllfacebookPorts.push(ComPortfacebook),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllfacebookPorts.length; b++)
          if (AllfacebookPorts[b] == a) {
            AllfacebookPorts.splice(b, 1);
            break;
          }
        ComPortfacebook =
          0 == AllfacebookPorts.length ? null : AllfacebookPorts[0];
      }),
      a.onMessage.addListener(OnMessageReceive))
    : "pinterest" == a.name
    ? ((ComPortPinterest = a),
      AllPinterestPorts.push(ComPortPinterest),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllPinterestPorts.length; b++)
          if (AllPinterestPorts[b] == a) {
            AllPinterestPorts.splice(b, 1);
            break;
          }
        ComPortPinterest =
          0 == AllPinterestPorts.length ? null : AllPinterestPorts[0];
      }),
      a.onMessage.addListener(OnMessageReceive))
    : "tinder" == a.name
    ? ((ComPortTinder = a),
      AllTinderPorts.push(ComPortTinder),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllTinderPorts.length; b++)
          if (AllTinderPorts[b] == a) {
            AllTinderPorts.splice(b, 1);
            break;
          }
        ComPortTinder = 0 == AllTinderPorts.length ? null : AllTinderPorts[0];
      }),
      a.onMessage.addListener(OnMessageReceive))
    : "twitter" == a.name
    ? ((ComPortTwitter = a),
      AllTwitterPorts.push(ComPortTwitter),
      a.onDisconnect.addListener(function () {
        for (var b = 0; b < AllTwitterPorts.length; b++)
          if (AllTwitterPorts[b] == a) {
            AllTwitterPorts.splice(b, 1);
            break;
          }
        ComPortTwitter =
          0 == AllTwitterPorts.length ? null : AllTwitterPorts[0];
      }),
      a.onMessage.addListener(OnMessageReceive))
    : "instafollow213index" == a.name &&
      ((ComPortIndex = a),
      a.onMessage.addListener(OnMessageReceive),
      a.onDisconnect.addListener(function () {
        ComPortIndex = null;
      }));
});
chrome.runtime.onInstalled.addListener(function (a) {
  "install" == a.reason &&
    (chrome.tabs.create(
      { url: chrome.extension.getURL("bot.html") },
      function (b) {
        console.log(b);
      }
    ),
    chrome.tabs.query(
      { url: "https://www.instagram.com/*", currentWindow: !0 },
      function (b) {
        if (0 == b.length)
          chrome.tabs.create({ url: "https://www.instagram.com/" });
        else {
          for (var c = 0; c < b.length; c++)
            chrome.tabs.remove(b[c].id, function () {});
          chrome.tabs.create({ url: "https://www.instagram.com" });
        }
      }
    ));
});
chrome.browserAction.onClicked.addListener(function (a) {
  chrome.tabs.create(
    { url: chrome.extension.getURL("bot.html") },
    function (b) {
      console.log(b);
    }
  );
  chrome.tabs.query(
    { url: "https://www.instagram.com/*", currentWindow: !0 },
    function (b) {
      if (0 == b.length)
        chrome.tabs.create({ url: "https://www.instagram.com/" });
      else {
        for (var c = 0; c < b.length; c++)
          chrome.tabs.remove(b[c].id, function () {});
        chrome.tabs.create({ url: "https://www.instagram.com" });
      }
    }
  );
});
function logTabsTikTokAccount(a) {
  for (var b = 0; b < a.length; b++) {
    var c = encodeURIComponent(a[b].url);
    encodeURIComponent(a[b].title);
    c.includes("tiktok.com") &&
      ((c = MediaTagTikTok[0]),
      chrome.tabs.update(a[b].id, { url: c }),
      TotalTikToks.push(c),
      setTimeout(function () {
        SendMessage(
          "LikeFollow",
          "story",
          {
            StartReact: StartReact,
            reacts: reacts || [],
            CommentedMedia: CommentedMedia,
            maxComments: maxComments,
            CommentPool: CommentPool,
            StartComment: StartComment,
            TikTokPoolSize: TotalTikToks.length,
            maxTikToks: maxTikToks,
            StartTikTokLike: StartTikTokLike,
            StartTikTokFollow: StartTikTokFollow,
            MaxTikTokFollows: MaxTikTokFollows,
            MaxTikTokLikes: MaxTikTokLikes,
            RankedTargets: RankedTargets,
            recents: recents,
            currentSpeed: currentSpeed,
            storyUser: "",
            getStats: getStats,
            LikedMedia: LikedMedia,
            username: "CurrentUser.username",
            Whitelist: Whitelist,
            StartUnfollow: StartUnfollow,
            StartFollow: StartFollow,
            StartLike: StartLike,
            maxFollows: maxFollows,
            FollowPoolSize: FollowedPool.length,
            FollowPoolSizeTikTok: FollowedPoolTikTok.length,
            LikedMediaTikTokSize: LikedMediaTikTok.length,
            maxLikes: maxLikes,
            LikePoolSize: likeCount,
            UnfollowPoolSize: UnfollowedPool.length,
            maxUnfollows: maxUnfollows,
            likeError: likeError,
          },
          ComPortTikTok
        );
      }, 5e3));
  }
}
function logTabsTikTok(a) {
  for (var b = 0; b < a.length; b++) {
    var c = encodeURIComponent(a[b].url);
    encodeURIComponent(a[b].title);
    if (c.includes("tiktok.com")) {
      c = 0 == TagPoolTikTok.length ? TagPool : TagPoolTikTok;
      var d = getRandomInt(0, c.length - 1);
      0 <= d &&
        (chrome.tabs.update(a[b].id, {
          url: "https://www.tiktok.com/tag/" + c[d].tag_name + "?lang=en",
        }),
        setTimeout(function () {
          SendMessage(
            "UpdateTikTok",
            "story",
            {
              StartReact: StartReact,
              reacts: reacts || [],
              CommentedMedia: CommentedMedia,
              maxComments: maxComments,
              CommentPool: CommentPool,
              StartComment: StartComment,
              maxTikToks: maxTikToks,
              RankedTargets: RankedTargets,
              StartTikTokLike: StartTikTokLike,
              StartTikTokFollow: StartTikTokFollow,
              MaxTikTokFollows: MaxTikTokFollows,
              MaxTikTokLikes: MaxTikTokLikes,
              FollowPoolSizeTikTok: FollowedPoolTikTok.length,
              FollowedPoolTikTokSize: FollowedPoolTikTok.length,
              LikedMediaTikTokSize: LikedMediaTikTok.length,
              recents: recents,
              currentSpeed: currentSpeed,
              storyUser: "",
              getStats: getStats,
              LikedMedia: LikedMedia,
              username: "CurrentUser.username",
              Whitelist: Whitelist,
              StartUnfollow: StartUnfollow,
              StartFollow: StartFollow,
              StartLike: StartLike,
              maxFollows: maxFollows,
              FollowPoolSize: FollowedPool.length,
              TikTokPoolSize: TotalTikToks.length,
              maxLikes: maxLikes,
              LikePoolSize: likeCount,
              UnfollowPoolSize: UnfollowedPool.length,
              maxUnfollows: maxUnfollows,
              likeError: likeError,
            },
            ComPortTikTok
          );
        }, 1e4));
    }
  }
}
function logTabsDM(a) {
  for (var b = 0; b < a.length; b++) {
    var c = encodeURIComponent(a[b].url);
    encodeURIComponent(a[b].title);
    if (c.includes("instagram.com")) {
      chrome.tabs.update(a[b].id, {
        url: "https://www.instagram.com/" + msg.username,
      });
      activeTab = b;
      --likeError;
      CurrentUser &&
        setTimeout(function () {
          CurrentUser &&
            (SendMessage(
              "DODM",
              "story",
              {
                StartReact: StartReact,
                reacts: reacts || [],
                CommentedMedia: CommentedMedia,
                maxComments: maxComments,
                CommentPool: CommentPool,
                backgroundDMs: backgroundDMs,
                StartComment: StartComment,
                RankedTargets: RankedTargets,
                recents: recents,
                currentSpeed: currentSpeed,
                storyUser: msg.username,
                getStats: getStats,
                LikedMedia: LikedMedia,
                username: CurrentUser.username,
                Whitelist: Whitelist,
                StartUnfollow: StartUnfollow,
                StartFollow: StartFollow,
                StartLike: StartLike,
                maxFollows: maxFollows,
                FollowPoolSize: FollowedPool.length,
                maxLikes: maxLikes,
                LikePoolSize: likeCount,
                UnfollowPoolSize: UnfollowedPool.length,
                maxUnfollows: maxUnfollows,
                likeError: likeError,
              },
              ComPortContent
            ),
            (savedDM = {
              StartReact: StartReact,
              reacts: reacts || [],
              CommentedMedia: CommentedMedia,
              maxComments: maxComments,
              CommentPool: CommentPool,
              StartComment: StartComment,
              RankedTargets: RankedTargets,
              recents: recents,
              currentSpeed: currentSpeed,
              storyUser: msg.username,
              getStats: getStats,
              LikedMedia: LikedMedia,
              username: CurrentUser.username,
              Whitelist: Whitelist,
              StartUnfollow: StartUnfollow,
              StartFollow: StartFollow,
              StartLike: StartLike,
              maxFollows: maxFollows,
              FollowPoolSize: FollowedPool.length,
              maxLikes: maxLikes,
              LikePoolSize: likeCount,
              UnfollowPoolSize: UnfollowedPool.length,
              maxUnfollows: maxUnfollows,
              likeError: likeError,
            }));
        }, 1e4);
      break;
    }
  }
}
function isEmoji(a) {
  return a.match(
    "(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[#-9]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26ff]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])"
  )
    ? !0
    : !1;
}
function ConvertToCSV(a) {
  a = "object" != typeof a ? JSON.parse(a) : a;
  for (var b = "", c = 0; c < a.length; c++) {
    var d = "",
      f;
    for (f in a[c]) "" != d && (d += ","), (d += a[c][f]);
    b += d + "\r\n";
  }
  return b;
}
function OnMessageReceive(a) {
  console.log(a);
  if ("AddUsers" == a.Tag) AddUsersToDatabase(a.Users);
  else if ("LinkedinLead" == a.Tag)
    linkedin_data.push(a.User), OnLinkedinLike(a.User), SaveDatabase();
  else if ("loadLocal" == a.Tag) LoadDatabase();
  else if ("PostStats" == a.Tag) user_stats.push(a.data);
  else if ("GetUserHeader" == a.Tag)
    SendMessage("SendUserHeader", "User", CurrentUser, ComPortIndex);
  else if ("ZeroHour" == a.Tag) hoursLeft = 0;
  else if ("BadTarget" == a.Tag) {
    AccountTargets = AccountTargets.filter(function (e) {
      return e !== last_story;
    });
    AccountTargets = AccountTargets.filter(function (e) {
      return e !== last_story.split(" ").join("");
    });
    AccountTargets = AccountTargets.filter(function (e) {
      return e !== last_story + " ";
    });
    for (var b = 0; b < AccountTargets.length; b++)
      AccountTargets[b] == last_story && AccountTargets.splice(b, 1);
    SaveDatabase();
    SendSettings();
  } else if ("RecentFollowers" == a.Tag) {
    for (b = 0; b < instagram_data.length; b++)
      -1 < a.followers.indexOf(instagram_data[b].username) &&
        (instagram_data[b].connected = "true");
    SendMessage(
      "ReloadCharts",
      "data",
      { instagram_data: instagram_data, linkedin_data: linkedin_data },
      ComPortIndex
    );
    SaveDatabase();
  } else if ("UpdateLinkedinData" == a.Tag)
    (linkedin_data = a.linkedin_data), SaveDatabase();
  else if ("UpdateInstagramData" == a.Tag)
    (instagram_data = a.instagram_data), SaveDatabase();
  else if ("DownloadJson" == a.Tag)
    (b =
      "data:application/json;base64," +
      btoa(unescape(encodeURIComponent(JSON.stringify(a.url))))),
      chrome.downloads.download({
        url: b,
        filename: "Instoo.json",
        saveAs: !0,
      });
  else if ("setLanguage" == a.Tag)
    SendMessage("setLanguage", "User", "CurrentUser", ComPortIndex);
  else if ("minPhoto" == a.Tag)
    (minPhotos = parseInt(a.minPhoto)), SaveDatabase();
  else if ("minFollowers" == a.Tag)
    (minFollowers = parseInt(a.minFollowers)), SaveDatabase();
  else if ("maxFollowers" == a.Tag)
    (maxFollowers = parseInt(a.maxFollowers)), SaveDatabase();
  else if ("GetPinterest" == a.Tag)
    setTimeout(function () {
      SendMessage(
        "LikeFollow",
        "story",
        {
          StartReact: StartReact,
          reacts: reacts || [],
          CommentedMedia: CommentedMedia,
          maxComments: maxComments,
          CommentPool: CommentPool,
          StartComment: StartComment,
          StartPinterestLike: StartPinterestLike,
          StartPinterestFollow: StartPinterestFollow,
          MaxPinterestFollows: MaxPinterestFollows,
          MaxPinterestLikes: MaxPinterestLikes,
          FollowedPoolPinterestSize: FollowedPoolPinterest.length,
          LikedMediaPinterestSize: LikedMediaPinterest.length,
          PinterestPoolSize: TotalPinterests.length,
          maxPinterests: maxPinterests,
          RankedTargets: RankedTargets,
          recents: recents,
          currentSpeed: currentSpeed,
          storyUser: "",
          getStats: getStats,
          LikedMedia: LikedMedia,
          username: "CurrentUser.username",
          Whitelist: Whitelist,
          StartUnfollow: StartUnfollow,
          StartFollow: StartFollow,
          StartLike: StartLike,
          maxFollows: maxFollows,
          FollowPoolSize: FollowedPool.length,
          maxLikes: maxLikes,
          LikePoolSize: likeCount,
          UnfollowPoolSize: UnfollowedPool.length,
          maxUnfollows: maxUnfollows,
          likeError: likeError,
        },
        ComPortPinterest
      );
    }, 2e3);
  else if ("validateInstagramFollowers" == a.Tag)
    SendMessage(
      "validateInstagramFollowers",
      "story",
      last_story,
      ComPortContent
    );
  else if ("minFollowing" == a.Tag)
    (minFollowing = parseInt(a.minFollowing)), SaveDatabase();
  else if ("maxFollowing" == a.Tag)
    (maxFollowing = parseInt(a.maxFollowing)), SaveDatabase();
  else if ("LoadAccount" == a.Tag && "undefined" != typeof CurrentUser) {
    var c = cloud_db;
    c || (c = []);
    c || (c = []);
    b = null;
    for (var d = 0; d < c.length; d++)
      if (c[d] && c[d].username == a.account) {
        b = c[d].database;
        break;
      }
    "undefined" != typeof c[d] &&
      ((CurrentUser.username = c[d].username),
      (CurrentUser.user_pic_url = c[d].user_pic_url),
      (CurrentUser.user_id = c[d].user_id),
      SendMessage("SetPhoto", "user", CurrentUser, ComPortIndex),
      b &&
        ((UserPool = JSON.parse(b.UserPool)),
        (FollowedPool = JSON.parse(b.FollowedPool)),
        (linkedin_data = JSON.parse(b.linkedin_data)),
        b.instagram_data && (instagram_data = JSON.parse(b.instagram_data)),
        (LikedMedia = JSON.parse(b.LikedMedia)),
        (StoryMedia = JSON.parse(b.StoryMedia)),
        (CommentedMedia = JSON.parse(b.CommentedMedia)),
        (UnfollowedPool = JSON.parse(b.UnfollowedPool)),
        (CollectJobs = JSON.parse(b.CollectJobs)),
        (CollectFollowingsJob = JSON.parse(b.CollectFollowingsJob)),
        (AllFollowings = JSON.parse(b.AllFollowings)),
        (Whitelist = JSON.parse(b.Whitelist)),
        (TagPool = JSON.parse(b.TagPool)),
        (CommentPool = JSON.parse(b.CommentPool)),
        (AccountPool = JSON.parse(b.AccountPool)),
        (user_stats = JSON.parse(b.user_stats)),
        (MediaPool = JSON.parse(b.MediaPool)),
        (my_followers = JSON.parse(b.my_followers)),
        b.AccountTargets && (AccountTargets = JSON.parse(b.AccountTargets)),
        b.blacklist && (blacklist = JSON.parse(b.blacklist)),
        b.filters && (filters = JSON.parse(b.filters)),
        b.reacts && (reacts = JSON.parse(b.reacts)),
        (c = JSON.parse(b.Settings)),
        (unfollow_mode = c.unfollow_mode),
        (FollowSettings = c.FollowSettings),
        (UnfollowSettings = c.UnfollowSettings),
        (CollectFollowers = c.CollectFollowers),
        (CollectFollowings = c.CollectFollowings),
        (UnfollowAfterDays = c.UnfollowAfterDays),
        (LikeSettings = c.LikeSettings),
        (StorySettings = c.StorySettings),
        (CommentSettings = c.CommentSettings),
        (slow = c.slow),
        (Day = c.Day),
        (maxFollows = c.maxFollows),
        (maxUnfollows = c.maxUnfollows),
        c.minPhotos &&
          ((minPhotos = c.minPhotos),
          (maxFollowers = c.maxFollowers),
          (minFollowers = c.minFollowers),
          (maxFollowing = c.maxFollowing),
          (minFollowing = c.minFollowing)),
        (maxLikes = c.maxLikes),
        (maxStories = c.maxStories),
        (maxComments = c.maxComments),
        (StartReact = c.StartReact),
        (EnableFilters = c.EnableFilters),
        (StartSchedule = c.StartSchedule),
        (StartTime = c.StartTime),
        (AutoActions = c.AutoActions),
        (Duration = c.Duration),
        c.round_robin_hashtag && (round_robin_hashtag = c.round_robin_hashtag),
        c.round_robin_account && (round_robin_account = c.round_robin_account),
        c.addIdeal && (addIdeal = c.addIdeal),
        c.hoursLeft && (hoursLeft = c.hoursLeft),
        c.blocked && (blocked = c.blocked),
        (currentSpeed = c.currentSpeed || 1),
        (loaded_cloud = !0),
        c.TinderSettings && (TinderSettings = c.TinderSettings),
        b.user_followers && (user_followers = JSON.parse(b.user_followers)),
        c.PinterestSettings && (PinterestSettings = c.PinterestSettings),
        b.TagPoolPinterest &&
          (TagPoolPinterest = JSON.parse(b.TagPoolPinterest)),
        b.FollowedPoolPinterest &&
          (FollowedPoolPinterest = JSON.parse(b.FollowedPoolPinterest)),
        b.LikedMediaPinterest &&
          (LikedMediaPinterest = JSON.parse(b.LikedMediaPinterest)),
        b.linkedin_data && (linkedin_data = JSON.parse(b.linkedin_data)),
        b.instagram_data && (instagram_data = JSON.parse(b.instagram_data)),
        c.LinkedinSettings && (LinkedinSettings = c.LinkedinSettings),
        b.TagPoolLinkedin && (TagPoolLinkedin = JSON.parse(b.TagPoolLinkedin)),
        b.FollowedPoolLinkedin &&
          (FollowedPoolLinkedin = JSON.parse(b.FollowedPoolLinkedin)),
        b.LikedMediaLinkedin &&
          (LikedMediaLinkedin = JSON.parse(b.LikedMediaLinkedin)),
        b.CommentedPoolTinder &&
          (FollowedPoolTinder = JSON.parse(b.FollowedPoolTinder)),
        b.LikedMediaTinder &&
          (LikedMediaTinder = JSON.parse(b.LikedMediaTinder)),
        c.TwitterSettings && (TwitterSettings = c.TwitterSettings),
        b.user_followers && (user_followers = JSON.parse(b.user_followers)),
        b.TagPoolTwitter && (TagPoolTwitter = JSON.parse(b.TagPoolTwitter)),
        b.FollowedPoolTwitter &&
          (FollowedPoolTwitter = JSON.parse(b.FollowedPoolTwitter)),
        b.LikedMediaTwitter &&
          (LikedMediaTwitter = JSON.parse(b.LikedMediaTwitter)),
        b.self_job && (self_job = JSON.parse(b.self_job)),
        b.tiktok_data && (tiktok_data = JSON.parse(b.tiktok_data)),
        c.TikTokSettings && (TikTokSettings = c.TikTokSettings),
        b.TagPoolTikTok && (TagPoolTikTok = JSON.parse(b.TagPoolTikTok)),
        b.FollowedPoolTikTok &&
          (FollowedPoolTikTok = JSON.parse(b.FollowedPoolTikTok)),
        b.LikedMediaTikTok &&
          (LikedMediaTikTok = JSON.parse(b.LikedMediaTikTok)),
        b.tiktok_data && (tiktok_data = JSON.parse(b.tiktok_data)),
        b.facebook_data && (facebook_data = JSON.parse(b.facebook_data)),
        c.facebookSettings && (facebookSettings = c.facebookSettings),
        b.TagPoolfacebook && (TagPoolfacebook = JSON.parse(b.TagPoolfacebook)),
        b.AccountPoolfacebook &&
          (AccountPoolfacebook = JSON.parse(b.AccountPoolfacebook)),
        b.user_stats && (user_stats = JSON.parse(b.user_stats)),
        b.FollowedPoolfacebook &&
          (FollowedPoolfacebook = JSON.parse(b.FollowedPoolfacebook)),
        b.LikedMediafacebook &&
          (LikedMediafacebook = JSON.parse(b.LikedMediafacebook)),
        b.facebook_data && (facebook_data = JSON.parse(b.facebook_data)),
        CollectFollowingsJob.eof &&
          ((CollectFollowingsJob.eof = !1),
          (CollectFollowingsJob.cursor_key = null))));
    CurrentUser && (CollectFollowingsJob.user_id = CurrentUser.user_id);
  } else if ("AddHashAccount" == a.Tag)
    (b = a.account.split("@").join("")),
      b.includes("/") ||
        b.includes("%") ||
        isEmoji(b) ||
        b.includes("'") ||
        b.includes(" ") ||
        ("." == b.charAt(b.length - 1) && (b = b.substring(0, b.length - 1)),
        AccountTargets.includes(b) ||
          ((b.match(/^[0-9a-z._]+$/) || b.includes(".") || b.includes("_")) &&
            AccountTargets.push(b))),
      SaveDatabase();
  else if ("ClientError" == a.Tag)
    a.error.includes("ResizeObserver") ||
      $.ajax({
        url: "https://instoo.com/user/ClientError",
        type: "post",
        data: { blocked: a.error + chrome.runtime.getManifest().version },
        success: function (e) {},
      });
  else if ("blocked" == a.Tag)
    $.ajax({
      url: "https://instoo.com/user/blocked",
      type: "post",
      data: { blocked: a.blocked + chrome.runtime.getManifest().version },
      success: function (e) {},
    }),
      SendMessage("blocked", "User", CurrentUser, ComPortIndex),
      (blocked = !0);
  else if ("IdealTarget" == a.Tag) {
    IdealTargets.push(a.target);
    var f = [];
    $.each(IdealTargets, function (e, g) {
      -1 === $.inArray(g, f) && f.push(g);
    });
    IdealTargets = f;
    !AccountTargets.includes(a.target) &&
      addIdeal &&
      (a.target.username.match(/^[0-9a-z._]+$/) ||
        a.target.username.includes(".") ||
        a.target.username.includes("_")) &&
      AccountTargets.push(a.target.username);
    SaveDatabase();
  } else if ("AddToBlacklist" == a.Tag) blacklist.push(a.user);
  else if ("GetFollowLike" == a.Tag)
    setTimeout(function () {
      last_story.doactions = a.User;
      SendMessage("RunFollowLike", "story", last_story, ComPortContent);
    }, 1e4);
  else if ("AddToFilters" == a.Tag) filters.push(a.user), SaveDatabase();
  else if ("ClearFilters" == a.Tag) (filters = []), SaveDatabase();
  else if ("TwitterTarget" == a.Tag)
    TwitterTargets.push(a.target), SaveDatabase();
  else if ("refreshStats" == a.Tag) --hoursLeft;
  else if ("WarmupMode" == a.Tag) WarmupMode = !0;
  else if ("switch-account" == a.Tag)
    chrome.tabs.query({ windowType: "normal" }, function (e) {
      for (var g = 0; g < e.length; g++) {
        var h = encodeURIComponent(e[g].url);
        encodeURIComponent(e[g].title);
        h.includes("instagram.com") &&
          (chrome.tabs.update(e[g].id, { url: "https://www.instagram.com/" }),
          setTimeout(function () {
            SendMessage(
              "SendUserHeader",
              "firstTime",
              firstTime,
              ComPortContent
            );
            firstTime = !1;
          }, 1e4));
      }
    });
  else if ("Setaddideal" == a.Tag) (addIdeal = a.addideal), SaveDatabase();
  else if ("UpdateHours" == a.Tag) --hoursLeft, SaveDatabase();
  else if ("Setunfollowinstoo" == a.Tag)
    (unfollow_mode = a.unfollowInstoo), SaveDatabase();
  else if ("UpdatePinterestFollowLimit" == a.Tag)
    (MaxPinterestFollows = a.limit), SaveDatabase();
  else if ("UpdatePinterestLikeLimit" == a.Tag)
    (MaxPinterestLikes = a.limit), SaveDatabase();
  else if ("UpdateLinkedinFollowLimit" == a.Tag)
    (MaxLinkedinFollows = a.limit), SaveDatabase();
  else if ("UpdateLinkedinLikeLimit" == a.Tag)
    (MaxLinkedinLikes = a.limit), SaveDatabase();
  else if ("UpdateTinderCommentLimit" == a.Tag)
    (MaxTinderComments = a.limit), SaveDatabase();
  else if ("UpdateTinderLikeLimit" == a.Tag)
    (MaxTinderLikes = a.limit), SaveDatabase();
  else if ("UpdateTwitterFollowLimit" == a.Tag)
    (MaxTwitterFollows = a.limit), SaveDatabase();
  else if ("UpdateTwitterLikeLimit" == a.Tag)
    (MaxTwitterLikes = a.limit), SaveDatabase();
  else if ("DODM" == a.Tag)
    "function" === typeof chrome.tabs.getAllInWindow
      ? chrome.tabs.query({ windowType: "normal" }, function (e) {
          for (var g = 0; g < e.length; g++) {
            var h = encodeURIComponent(e[g].url);
            encodeURIComponent(e[g].title);
            if (h.includes("instagram.com")) {
              chrome.tabs.update(e[g].id, {
                url: "https://www.instagram.com/" + a.username,
              });
              activeTab = g;
              --likeError;
              CurrentUser &&
                setTimeout(function () {
                  CurrentUser &&
                    (SendMessage(
                      "DODM",
                      "story",
                      {
                        StartReact: StartReact,
                        reacts: reacts || [],
                        CommentedMedia: CommentedMedia,
                        maxComments: maxComments,
                        CommentPool: CommentPool,
                        backgroundDMs: backgroundDMs,
                        StartComment: StartComment,
                        RankedTargets: RankedTargets,
                        recents: recents,
                        currentSpeed: currentSpeed,
                        storyUser: a.username,
                        getStats: getStats,
                        LikedMedia: LikedMedia,
                        username: CurrentUser.username,
                        Whitelist: Whitelist,
                        StartUnfollow: StartUnfollow,
                        StartFollow: StartFollow,
                        StartLike: StartLike,
                        maxFollows: maxFollows,
                        FollowPoolSize: FollowedPool.length,
                        maxLikes: maxLikes,
                        LikePoolSize: likeCount,
                        UnfollowPoolSize: UnfollowedPool.length,
                        maxUnfollows: maxUnfollows,
                        likeError: likeError,
                      },
                      ComPortContent
                    ),
                    (savedDM = {
                      StartReact: StartReact,
                      reacts: reacts || [],
                      CommentedMedia: CommentedMedia,
                      maxComments: maxComments,
                      CommentPool: CommentPool,
                      StartComment: StartComment,
                      RankedTargets: RankedTargets,
                      recents: recents,
                      currentSpeed: currentSpeed,
                      storyUser: a.username,
                      getStats: getStats,
                      LikedMedia: LikedMedia,
                      username: CurrentUser.username,
                      Whitelist: Whitelist,
                      StartUnfollow: StartUnfollow,
                      StartFollow: StartFollow,
                      StartLike: StartLike,
                      maxFollows: maxFollows,
                      FollowPoolSize: FollowedPool.length,
                      maxLikes: maxLikes,
                      LikePoolSize: likeCount,
                      UnfollowPoolSize: UnfollowedPool.length,
                      maxUnfollows: maxUnfollows,
                      likeError: likeError,
                    }));
                }, 1e4);
              break;
            }
          }
        })
      : browser.tabs.query({ currentWindow: !0 }).then(logTabsDM, onError);
  else if ("SetDMMode" == a.Tag) (backgroundDMs = a.mode), SaveDatabase();
  else if ("userLogin" == a.Tag)
    SendMessage("userLogin", "story", "savedDM", ComPortContent),
      (firstTime = !1);
  else if ("SetEnableFilters" == a.Tag)
    (EnableFilters = a.mode), SaveDatabase();
  else if ("GetUserStats" == a.Tag)
    chrome.tabs.query({ windowType: "normal" }, function (e) {
      for (var g = 0; g < e.length; g++) {
        var h = encodeURIComponent(e[g].url);
        encodeURIComponent(e[g].title);
        h.includes("instagram.com") &&
          (chrome.tabs.update(e[g].id, { url: "https://www.instagram.com/" }),
          setTimeout(function () {
            SendMessage(
              "SendUserHeader",
              "firstTime",
              firstTime,
              ComPortContent
            );
            firstTime = !1;
          }, 5e3));
      }
    });
  else if ("myCollectJob" == a.Tag) myCollectJob = a.Job;
  else if ("GetTopFollowers" != a.Tag)
    if ("GetStory" == a.Tag)
      SendMessage("UpdateStory", "story", last_story, ComPortContent);
    else if ("GetDM" == a.Tag)
      SendMessage("DODM", "story", savedDM, ComPortContent), SaveDatabase();
    else if ("SetReactMode" == a.Tag) (StartReact = a.reacts), SaveDatabase();
    else if ("DoneLinkedin" == a.Tag)
      TotalLinkedins.push(a.target), SaveDatabase();
    else if ("DoneTwitter" == a.Tag)
      TotalTwitter.push(a.target), SaveDatabase();
    else if ("RankedID" != a.Tag)
      if ("SetSchedule" == a.Tag) (StartSchedule = a.schedule), SaveDatabase();
      else if ("SetStart" == a.Tag) (StartTime = a.start), SaveDatabase();
      else if ("LinkedinTarget" == a.Tag)
        LinkedinTargets.push(a.target), SaveDatabase();
      else if ("TwitterTarget" == a.Tag)
        TwitterTargets.push(a.target), SaveDatabase();
      else if ("SetDuration" == a.Tag) (Duration = a.duration), SaveDatabase();
      else if ("SetAutoActions" == a.Tag)
        (AutoActions = a.actions), SaveDatabase();
      else if ("SetReacts" == a.Tag)
        -1 < a.reacts.indexOf("on")
          ? ((StartReact = !0), (reacts = a.reacts), reacts.splice(0, 1))
          : ((StartReact = !1), (reacts = a.reacts)),
          SaveDatabase();
      else if ("Pause" == a.Tag)
        (StoryFollow = StartLike = StartUnfollow = StartStory = !1),
          SendMessage("Pause", "User", CurrentUser, ComPortIndex);
      else if ("triggerUnfollow" != a.Tag)
        if ("triggerUnfollow" == a.Tag)
          setTimeout(function () {
            SendMessage(
              "triggerUnfollow",
              "story",
              {
                currentSpeed: currentSpeed,
                storyUser: "",
                getStats: getStats,
                LikedMedia: LikedMedia,
                username: CurrentUser.username,
                Whitelist: Whitelist,
                StartUnfollow: StartUnfollow,
                StartFollow: StartFollow,
                StartLike: StartLike,
                maxFollows: maxFollows,
                FollowPoolSize: FollowedPool.length,
                maxLikes: maxLikes,
                LikePoolSize: likeCount,
                UnfollowPoolSize: UnfollowedPool.length,
                maxUnfollows: maxUnfollows,
                likeError: likeError,
              },
              ComPortContent
            );
          }, 2e3);
        else if ("setStats" == a.Tag) getStats = 0;
        else if ("Recents" == a.Tag)
          for (recents = a.recents, b = 0; b < recents.length; b++)
            (c = RankedTargets.indexOf(recents[b])),
              -1 != c && RankedTargets.splice(c, 1);
        else if ("gotStats" == a.Tag)
          (getStats = 0),
            SendMessage("gotStats", "followers", a.followers, ComPortIndex),
            (user_follower_count = a.followers.followers
              .split(",")
              .join("")
              .split(".")
              .join("")
              .split(" ")
              .join("")),
            (user_following_count = a.followers.following
              .split(",")
              .join("")
              .split(".")
              .join("")
              .split(" ")
              .join(""));
        else if ("OpenInstagram" == a.Tag)
          setTimeout(function () {
            0 == IsUserLoggedIn &&
              chrome.tabs.query(
                { url: "https://www.instagram.com/*", currentWindow: !0 },
                function (e) {
                  0 == e.length
                    ? chrome.tabs.create({ url: "https://www.instagram.com/" })
                    : chrome.tabs.reload(e[0].id);
                }
              );
          }, 1e4);
        else if ("OpenInstagramFast" == a.Tag)
          0 == IsUserLoggedIn &&
            chrome.tabs.query(
              { url: "https://www.instagram.com/*", currentWindow: !0 },
              function (e) {
                0 == e.length
                  ? chrome.tabs.create({ url: "https://www.instagram.com/" })
                  : chrome.tabs.reload(e[0].id);
              }
            );
        else if ("userData" == a.Tag)
          SendMessage("userData", "User", a.User, ComPortIndex);
        else if ("GetUserData" == a.Tag)
          SendMessage("GetUserData", "username", a.username, ComPortContent);
        else if ("CollectFromAccount" == a.Tag) SaveDatabase();
        else if ("GotUserHeader" == a.Tag)
          UpdateCurrentUser(a.User),
            ("undefined" != typeof CurrentUser && CurrentUser) ||
              setTimeout(function () {
                SendMessage(
                  "SendUserHeader",
                  "firstTime",
                  firstTime,
                  ComPortContent
                );
                firstTime = !1;
              }, 2e3),
            setTimeout(function () {
              "undefined" != typeof CurrentUser && CurrentUser
                ? CurrentUser ||
                  chrome.tabs.query({ windowType: "normal" }, function (e) {
                    for (var g = 0; g < e.length; g++) {
                      var h = encodeURIComponent(e[g].url);
                      encodeURIComponent(e[g].title);
                      h.includes("stories") &&
                        "undefined" == typeof CurrentUser &&
                        (chrome.tabs.update(e[g].id, {
                          url: "https://www.instagram.com/",
                        }),
                        setTimeout(function () {
                          SendMessage(
                            "SendUserHeader",
                            "firstTime",
                            firstTime,
                            ComPortContent
                          );
                          firstTime = !1;
                        }, 2e3));
                    }
                  })
                : chrome.tabs.query({ windowType: "normal" }, function (e) {
                    for (var g = 0; g < e.length; g++) {
                      var h = encodeURIComponent(e[g].url);
                      encodeURIComponent(e[g].title);
                      h.includes("stories") &&
                        "undefined" == typeof CurrentUser &&
                        (chrome.tabs.update(e[g].id, {
                          url: "https://www.instagram.com/",
                        }),
                        setTimeout(function () {
                          SendMessage(
                            "SendUserHeader",
                            "firstTime",
                            firstTime,
                            ComPortContent
                          );
                          firstTime = !1;
                        }, 2e3));
                    }
                  });
            }, 1e4);
        else if ("GotFollowers" == a.Tag) CheckFollowers(a.Users);
        else if ("AccountDict" == a.Tag) CheckAccountsDict(a.accounts);
        else if ("TagDict" == a.Tag) CheckTagsDict(a.Hashtags);
        else if ("FollowedUser" == a.Tag) OnFollowedUser(a.User);
        else if ("FollowedUserStory" == a.Tag) OnFollowedUserStory(a.User);
        else if ("DonePinterestFollow" == a.Tag) OnPinterestFollow(a.User);
        else if ("DonePinterestLike" == a.Tag) OnPinterestLike(a.User);
        else if ("DoneLinkedinFollow" == a.Tag) OnLinkedinFollow(a.User);
        else if ("DoneLinkedinLike" == a.Tag) OnLinkedinLike(a.User);
        else if ("DoneTinderComment" == a.Tag) OnTinderFollow(a.User);
        else if ("DoneTinderLike" == a.Tag) OnTinderLike(a.User);
        else if ("DoneTwitterRetweet" == a.Tag) OnTwitterFollow(a.User);
        else if ("DoneTwitterFollow" == a.Tag) OnTwitterFollow(a.User);
        else if ("DoneTwitterLike" == a.Tag) OnTwitterLike(a.User);
        else if ("SkipFollowStory" == a.Tag)
          SendMessage("SkipFollowStory", "text", a.text, ComPortIndex);
        else if ("LikedMedia" == a.Tag) likeCount++, OnLikedMedia(a.Media);
        else if ("StoryMedia" == a.Tag) OnStoryMedia(a.Media);
        else if ("CommentedMedia" == a.Tag) OnCommentedMedia(a.Media);
        else if ("RequestFollowStatus" == a.Tag) SendFollowStatus(a.Num);
        else if ("SetFollowValue" == a.Tag) StartFollow = a.Value;
        else if ("SetFollowPinterest" == a.Tag)
          StartPinterest =
            (StartPinterestFollow = a.Value) || StartPinterestLike ? !0 : !1;
        else if ("SetLikePinterest" == a.Tag)
          (StartPinterestLike = a.Value),
            (StartPinterest =
              StartPinterestFollow || StartPinterestLike ? !0 : !1);
        else if ("SetFollowLinkedin" == a.Tag)
          StartLinkedin =
            (StartLinkedinFollow = a.Value) || StartLinkedinLike ? !0 : !1;
        else if ("SetLikeLinkedin" == a.Tag)
          (StartLinkedinLike = a.Value),
            (StartLinkedin =
              StartLinkedinFollow || StartLinkedinLike ? !0 : !1);
        else if ("SetCommentTinder" == a.Tag)
          StartTinder =
            (StartTinderComment = a.Value) || StartTinderComment ? !0 : !1;
        else if ("SetLikeTinder" == a.Tag)
          (StartTinderLike = a.Value),
            (StartTinder = StartTinderFollow || StartTinderLike ? !0 : !1);
        else if ("SetFollowTwitter" == a.Tag)
          StartTwitter =
            (StartTwitterFollow = a.Value) || StartTwitterLike ? !0 : !1;
        else if ("SetLikeTwitter" == a.Tag)
          (StartTwitterLike = a.Value),
            (StartTwitter = StartTwitterFollow || StartTwitterLike ? !0 : !1);
        else if ("TagAnalytics" == a.Tag)
          analytics.push({ target: a.data.username, tag: "#" + a.data.target });
        else if ("AddAccountTarget" == a.Tag)
          (b = a.account.username.split("@").join("")),
            b.includes("/") ||
              b.includes("%") ||
              isEmoji(b) ||
              b.includes("'") ||
              b.includes(" ") ||
              ((b.match(/^[0-9a-z._]+$/) ||
                b.includes(".") ||
                b.includes("_")) &&
                AccountTargets.push(a.account.username.split("@").join("")),
              analytics.push({
                target: a.account.id,
                tag: "@" + a.account.target,
              }),
              SaveDatabase());
        else if ("SetLikeValue" == a.Tag) (StartLike = a.Value), SaveDatabase();
        else if ("SetStoryValue" == a.Tag)
          (StartStory = a.Value), SaveDatabase();
        else if ("SetCommentValue" == a.Tag)
          (StartComment = a.Value), SaveDatabase();
        else if ("SetUnfollowValue" == a.Tag)
          (StartUnfollow = a.Value), SaveDatabase();
        else if ("CurrentUserUpdate" == a.Tag) UpdateCurrentUser(a.User);
        else if ("AddCollectJob" == a.Tag) AddCollectJob(a.Job);
        else if ("GetFollowers" == a.Tag) GetFollowers(a.Job);
        else if ("RequestCollectJobStatus" == a.Tag)
          SendMessage(
            "CollectJobStatus",
            "Status",
            IsCollectJobAvailableForUser(a.user_id),
            ComPortContent
          );
        else if ("ModifyCollectJobCursor" == a.Tag)
          ModifyCollectJobCursor(a.Job);
        else if ("UpdateFollowerCount" == a.Tag) UpdateFollowerCount(a.Update);
        else if ("ModifyCollectJobCursorSelf" == a.Tag)
          ModifyCollectJobCursorSelf(a.Job);
        else if ("RemoveCollectJob" == a.Tag) RemoveCollectJobByUser(a.user_id);
        else if ("RemoveCollectJobSelf" == a.Tag)
          RemoveCollectJobByUserSelf(a.user_id);
        else if ("UpdateFollowingsJob" == a.Tag)
          UpdateCollectFollowingsJob(a.Job);
        else if ("AddMedia" == a.Tag) AddMedia(a.Medias);
        else if ("AddFollowings" == a.Tag) AddFollowings(a.Users);
        else if ("UnfollowedUser" == a.Tag) OnUnfollowedUser(a.User);
        else if ("RequestSettings" == a.Tag) SendSettings();
        else if ("RequestSettingsFirst" == a.Tag) SendSettings();
        else if ("allow_local" == a.Tag) allow_local = !0;
        else if ("UpdateSettings" == a.Tag) UpdateSettings(a.Settings);
        else if ("UpdateDay" == a.Tag) Day = a.Day;
        else if ("LoadCloudDB" == a.Tag) {
          allow_local = !0;
          (c = cloud_db = a.Database) || (c = []);
          b = null;
          for (d = 0; d < c.length; d++)
            if (CurrentUser && c[d] && c[d].user_id == CurrentUser.user_id) {
              b = c[d].database;
              break;
            }
          b &&
            ((UserPool = JSON.parse(b.UserPool)),
            (FollowedPool = JSON.parse(b.FollowedPool)),
            (LikedMedia = JSON.parse(b.LikedMedia)),
            (StoryMedia = JSON.parse(b.StoryMedia)),
            (CommentedMedia = JSON.parse(b.CommentedMedia)),
            (UnfollowedPool = JSON.parse(b.UnfollowedPool)),
            (CollectJobs = JSON.parse(b.CollectJobs)),
            (CollectFollowingsJob = JSON.parse(b.CollectFollowingsJob)),
            (AllFollowings = JSON.parse(b.AllFollowings)),
            (Whitelist = JSON.parse(b.Whitelist)),
            (TagPool = JSON.parse(b.TagPool)),
            (CommentPool = JSON.parse(b.CommentPool)),
            (AccountPool = JSON.parse(b.AccountPool)),
            (user_stats = JSON.parse(b.user_stats)),
            (MediaPool = JSON.parse(b.MediaPool)),
            (my_followers = JSON.parse(b.my_followers)),
            b.AccountTargets && (AccountTargets = JSON.parse(b.AccountTargets)),
            b.blacklist && (blacklist = JSON.parse(b.blacklist)),
            b.filters && (filters = JSON.parse(b.filters)),
            b.reacts && (reacts = JSON.parse(b.reacts)),
            (c = JSON.parse(b.Settings)),
            (unfollow_mode = c.unfollow_mode),
            (FollowSettings = c.FollowSettings),
            (UnfollowSettings = c.UnfollowSettings),
            (CollectFollowers = c.CollectFollowers),
            (CollectFollowings = c.CollectFollowings),
            (UnfollowAfterDays = c.UnfollowAfterDays),
            (LikeSettings = c.LikeSettings),
            (StorySettings = c.StorySettings),
            (CommentSettings = c.CommentSettings),
            (slow = c.slow),
            (Day = c.Day),
            (d = new Date()),
            (d = String(d.getDate()).padStart(2, "0")),
            0 == Day
              ? ((last_day = d),
                (d = new Date()),
                (Day = d = String(d.getDate()).padStart(2, "0")))
              : Day != d && ((Day = d), ResetPools()),
            (maxFollows = c.maxFollows),
            (maxUnfollows = c.maxUnfollows),
            c.minPhotos &&
              ((minPhotos = c.minPhotos),
              (maxFollowers = c.maxFollowers),
              (minFollowers = c.minFollowers),
              (maxFollowing = c.maxFollowing),
              (minFollowing = c.minFollowing)),
            (maxLikes = c.maxLikes),
            (maxStories = c.maxStories),
            (maxComments = c.maxComments),
            (StartReact = c.StartReact),
            (EnableFilters = c.EnableFilters),
            (StartSchedule = c.StartSchedule),
            (StartTime = c.StartTime),
            (AutoActions = c.AutoActions),
            (Duration = c.Duration),
            c.round_robin_hashtag &&
              (round_robin_hashtag = c.round_robin_hashtag),
            c.round_robin_account &&
              (round_robin_account = c.round_robin_account),
            c.addIdeal && (addIdeal = c.addIdeal),
            c.hoursLeft && (hoursLeft = c.hoursLeft),
            c.blocked && (blocked = c.blocked),
            (currentSpeed = c.currentSpeed || 1),
            (loaded_cloud = !0),
            c.TikTokSettings && (TikTokSettings = c.TikTokSettings),
            b.user_followers && (user_followers = JSON.parse(b.user_followers)),
            b.TagPoolTikTok && (TagPoolTikTok = JSON.parse(b.TagPoolTikTok)),
            b.FollowedPoolTikTok &&
              (FollowedPoolTikTok = JSON.parse(b.FollowedPoolTikTok)),
            b.LikedMediaTikTok &&
              (LikedMediaTikTok = JSON.parse(b.LikedMediaTikTok)),
            b.TagPoolfacebook &&
              (TagPoolfacebook = JSON.parse(b.TagPoolfacebook)),
            c.PinterestSettings && (PinterestSettings = c.PinterestSettings),
            b.user_followers && (user_followers = JSON.parse(b.user_followers)),
            b.TagPoolPinterest &&
              (TagPoolPinterest = JSON.parse(b.TagPoolPinterest)),
            b.FollowedPoolPinterest &&
              (FollowedPoolPinterest = JSON.parse(b.FollowedPoolPinterest)),
            b.LikedMediaPinterest &&
              (LikedMediaPinterest = JSON.parse(b.LikedMediaPinterest)),
            b.linkedin_data && (linkedin_data = JSON.parse(b.linkedin_data)),
            b.instagram_data && (instagram_data = JSON.parse(b.instagram_data)),
            b.tiktok_data && (tiktok_data = JSON.parse(b.tiktok_data)),
            c.LinkedinSettings && (LinkedinSettings = c.LinkedinSettings),
            b.user_followers && (user_followers = JSON.parse(b.user_followers)),
            b.TagPoolLinkedin &&
              (TagPoolLinkedin = JSON.parse(b.TagPoolLinkedin)),
            b.FollowedPoolLinkedin &&
              (FollowedPoolLinkedin = JSON.parse(b.FollowedPoolLinkedin)),
            b.LikedMediaLinkedin &&
              (LikedMediaLinkedin = JSON.parse(b.LikedMediaLinkedin)),
            c.TinderSettings && (TinderSettings = c.TinderSettings),
            b.user_followers && (user_followers = JSON.parse(b.user_followers)),
            b.TagPoolTinder && (TagPoolTinder = JSON.parse(b.TagPoolTinder)),
            b.FollowedPoolTinder &&
              (FollowedPoolTinder = JSON.parse(b.FollowedPoolTinder)),
            b.LikedMediaTinder &&
              (LikedMediaTinder = JSON.parse(b.LikedMediaTinder)),
            c.TwitterSettings && (TwitterSettings = c.TwitterSettings),
            b.user_followers && (user_followers = JSON.parse(b.user_followers)),
            b.TagPoolTwitter && (TagPoolTwitter = JSON.parse(b.TagPoolTwitter)),
            b.FollowedPoolTwitter &&
              (FollowedPoolTwitter = JSON.parse(b.FollowedPoolTwitter)),
            b.LikedMediaTwitter &&
              (LikedMediaTwitter = JSON.parse(b.LikedMediaTwitter)),
            b.self_job && (self_job = JSON.parse(b.self_job)),
            CollectFollowingsJob.eof &&
              ((CollectFollowingsJob.eof = !1),
              (CollectFollowingsJob.cursor_key = null)));
          CurrentUser && (CollectFollowingsJob.user_id = CurrentUser.user_id);
          SaveDatabase();
        } else if ("ResetSettings" == a.Tag) ResetSettings();
        else if ("collectStories" == a.Tag) collect_Tags.push(a.variables);
        else if ("AddTagToList" == a.Tag) AddTagToList(a.TagName);
        else if ("AddTagToListTikTok" == a.Tag) AddTagToListTikTok(a.TagName);
        else if ("AddTagToListfacebook" == a.Tag)
          AddTagToListfacebook(a.TagName);
        else if ("AddAccountToListfacebook" == a.Tag)
          AddAccountToListfacebook(a.TagName);
        else if ("AddTagToListPinterest" == a.Tag)
          AddTagToListPinterest(a.TagName);
        else if ("AddTagToListLinkedin" == a.Tag)
          AddTagToListLinkedin(a.TagName);
        else if ("AddTagToListTwitter" == a.Tag) AddTagToListTwitter(a.TagName);
        else if ("AddCommentToList" == a.Tag) AddCommentToList(a.TagName);
        else if ("AddCommentToListTikTok" == a.Tag)
          AddCommentToListTikTok(a.TagName);
        else if ("AddCommentToListfacebook" == a.Tag)
          AddCommentToListfacebook(a.TagName);
        else if ("AddCommentToListPinterest" == a.Tag)
          AddCommentToListPinterest(a.TagName);
        else if ("AddCommentToListLinkedin" == a.Tag)
          AddCommentToListLinkedin(a.TagName);
        else if ("AddCommentToListTinder" == a.Tag)
          AddCommentToListTinder(a.TagName);
        else if ("AddCommentToListTwitter" == a.Tag)
          AddCommentToListTwitter(a.TagName);
        else if ("AddLocationToList" == a.Tag) AddLocationToList(a.TagName);
        else if ("RemoveTagFromList" == a.Tag)
          RemoveTagFromList(a.TagName), SaveDatabase();
        else if ("RemoveTagFromListTwitter" == a.Tag)
          RemoveTagFromListTwitter(a.TagName), SaveDatabase();
        else if ("RemoveTagFromListPinterest" == a.Tag)
          RemoveTagFromListPinterest(a.TagName), SaveDatabase();
        else if ("RemoveTagFromListLinkedin" == a.Tag)
          RemoveTagFromListLinkedin(a.TagName), SaveDatabase();
        else if ("RemoveCommentFromList" == a.Tag)
          RemoveCommentFromList(a.TagName), SaveDatabase();
        else if ("RemoveCommentFromListTinder" == a.Tag)
          RemoveCommentFromListTinder(a.TagName), SaveDatabase();
        else if ("RemoveLocationFromList" == a.Tag)
          RemoveLocationFromList(a.TagName), SaveDatabase();
        else if ("AddAccountToList" == a.Tag)
          AddAccountToList(a.TagName), SaveDatabase();
        else if ("RemoveAccountFromList" == a.Tag) {
          AccountTargets = AccountTargets.filter(function (e) {
            return e !== a.TagName;
          });
          AccountTargets = AccountTargets.filter(function (e) {
            return e !== a.TagName.split(" ").join("");
          });
          AccountTargets = AccountTargets.filter(function (e) {
            return e !== a.TagName + " ";
          });
          for (b = 0; b < AccountTargets.length; b++)
            AccountTargets[b] == a.TagName && AccountTargets.splice(b, 1);
          SaveDatabase();
          SendSettings();
        } else if ("WhitelistFollowings" == a.Tag) WhitelistFollowings(a.Start);
        else if ("RequestWhitelist" == a.Tag)
          SendMessage("AddedWhitelistUsers", "Users", Whitelist, ComPortIndex);
        else if ("RemoveWhitelistUser" == a.Tag)
          RemoveWhitelistUser(a.user_id),
            SendMessage(
              "AddedWhitelistUsers",
              "Users",
              Whitelist,
              ComPortIndex
            );
        else if ("AddUserToWhitelist" == a.Tag) AddUserToWhitelist(a.user_id);
        else if ("AddUserToWhitelistName" == a.Tag)
          (b = new User(
            a.username,
            a.username,
            a.username,
            "https://instoo.com/logo.png",
            0
          )),
            AddUserToWhitelistName(b);
        else if ("AddUserToWhitelistContent" == a.Tag)
          AddUserToWhitelistName(a.user);
        else if ("RequestFilteredFollowings" == a.Tag)
          RequestFilteredFollowings(a.Request);
        else if ("RequestWhitelistStatus" == a.Tag) SendWhitelistStatus();
        else if ("SetSlowMode" == a.Tag) slow = a.slow;
        else if ("SetUnfollowMode" == a.Tag)
          (unfollow_mode = a.unfollow), SaveDatabase();
        else if ("SetUnfollowDays" == a.Tag) UnfollowAfterDays = a.days;
        else if ("SetPaidMode" == a.Tag) paid_sub = a.paid;
        else if ("SendMyFollowers" == a.Tag) {
          if (((my_followers = a.followers), 1 == unfollow_mode))
            for (b = 0; b < my_followers.length; b++)
              IsUserInWhitelist(my_followers[b].user_id) ||
                Whitelist.push(my_followers[b]);
        } else
          "RequestMediaStatus" == a.Tag
            ? ((b = {}),
              (b.LikedMedias = LikedMedia),
              (b.FollowedPoolTikTok = FollowedPoolTikTok),
              (b.LikedMediaTikTok = LikedMediaTikTok),
              (b.TagsTikTok = TagPoolTikTok),
              (b.TagPoolTwitter = TagPoolTwitter),
              (b.CommentsTikTok = CommentPoolTikTok),
              (b.MaxfacebookFollows = MaxfacebookFollows),
              (b.Tagsfacebook = TagPoolfacebook),
              (b.AccountPoolfacebook = AccountPoolfacebook),
              (b.user_stats = user_stats),
              (b.FollowedPoolPinterest = FollowedPoolPinterest),
              (b.LikedMediaPinterest = LikedMediaPinterest),
              (b.TagsPinterest = TagPoolPinterest),
              (b.TagPoolTwitter = TagPoolTwitter),
              (b.CommentsPinterest = CommentPoolPinterest),
              (b.LikedMediafacebook = LikedMediafacebook),
              (b.FollowedPoolfacebook = FollowedPoolfacebook),
              (b.TagPoolLinkedin = TagPoolLinkedin),
              (b.FollowedPoolLinkedin = FollowedPoolLinkedin),
              (b.LikedMediaLinkedin = LikedMediaLinkedin),
              (b.TagsLinkedin = TagPoolLinkedin),
              (b.TagPoolTwitter = TagPoolTwitter),
              (b.CommentsLinkedin = CommentPoolLinkedin),
              (b.linkedin_data = linkedin_data),
              (b.instagram_data = instagram_data),
              (b.tiktok_data = tiktok_data),
              (b.CommentsTinder = CommentPoolTinder),
              (b.LikedMediaTinder = LikedMediaTinder),
              (b.FollowedPoolTwitter = FollowedPoolTwitter),
              (b.LikedMediaTwitter = LikedMediaTwitter),
              (b.TagsTwitter = TagPoolTwitter),
              (b.CommentsTwitter = CommentPoolTwitter),
              (b.StoryMedia = StoryMedia),
              (b.Tags = TagPool),
              (b.Accounts = AccountPool),
              (b.MediaPool = MediaPool),
              (b.Locations = LocationPool),
              (b.Comments = CommentPool),
              (b.CommentedMedias = CommentedMedia),
              SendMessage("UpdateMediaStatus", "Status", b, ComPortIndex))
            : "UpdateCollectMediaAccountJob" == a.Tag
            ? UpdateAccountJob(a.Job)
            : "UpdateCollectMediaJob" == a.Tag
            ? UpdateTagJob(a.Job)
            : "ImportDatabase" == a.Tag
            ? ImportDatabase(a.Database)
            : "ExportDatabase" == a.Tag
            ? ExportDatabase()
            : "SetPinterestValue" == a.Tag
            ? (StartPinterest = a.Value)
            : "SetLinkedinValue" == a.Tag
            ? (StartLinkedin = a.Value)
            : "SetTinderValue" == a.Tag
            ? (StartTinder = a.Value)
            : "SetTwitterValue" == a.Tag
            ? (StartTwitter = a.Value)
            : "addStory" == a.Tag
            ? a.story.username != CurrentUser.username &&
              (addStory(a.story),
              instagram_data.push({
                url: "https://instagram.com/" + a.story.username,
                username: a.story.username,
                img: a.story.user_pic_url,
                target: "@" + a.story.target,
                website: "none",
                sales: 0,
                twitter: "none",
                connected: "none",
                birthday: "none",
              }))
            : "GrabDatabase" == a.Tag
            ? GrabDatabase()
            : "getFocus" == a.Tag
            ? chrome.tabs.getSelected(null, function (e) {
                e.url.includes("instagram") || (last_tab = e.url);
                chrome.tabs.query({ windowType: "normal" }, function (g) {
                  for (var h = 0; h < g.length; h++) {
                    var k = encodeURIComponent(g[h].url);
                    encodeURIComponent(g[h].title);
                    k.includes("instagram.com") &&
                      chrome.tabs.update(
                        g[h].id,
                        { active: !0 },
                        function (l) {}
                      );
                  }
                });
              })
            : "returnFocus" == a.Tag
            ? chrome.tabs.query({ windowType: "normal" }, function (e) {
                for (var g = 0; g < e.length; g++)
                  encodeURIComponent(e[g].url),
                    encodeURIComponent(e[g].title),
                    e[g].url == last_tab &&
                      chrome.tabs.update(
                        e[g].id,
                        { active: !0 },
                        function (h) {}
                      );
              })
            : "ResetAll" == a.Tag
            ? ResetAll()
            : "ClearWhite" == a.Tag
            ? ClearWhite()
            : "FollowerCount" == a.Tag
            ? ((getStats = 0),
              SendMessage("gotStats", "followers", a.followers, ComPortIndex))
            : "ClearPools" == a.Tag
            ? ((MediaPool = []), (AccountPool = []))
            : "ClearMemory" == a.Tag
            ? ((MediaPool = []), (UserPool = []))
            : "RankTargets" != a.Tag &&
              ("ResetPool" == a.Tag
                ? ((getStats = 0),
                  ResetPools(),
                  ResetPools(),
                  SaveDatabase(),
                  SendSettings())
                : "SetSpeed" == a.Tag
                ? ((StorySettings.TimeMin = timing_model.min * currentSpeed),
                  (StorySettings.TimeMax = timing_model.max * currentSpeed),
                  8 == currentSpeed &&
                    ((StorySettings.TimeMin = 4500),
                    (StorySettings.TimeMax = 12e3)),
                  2 == currentSpeed &&
                    ((StorySettings.TimeMin = timing_model.min),
                    (StorySettings.TimeMax = 2 * timing_model.max)),
                  (currentSpeed = a.Num))
                : "SetSpeedPinterest" == a.Tag
                ? ((PinterestSettings.TimeMin = 60 * currentSpeedPinterest),
                  (PinterestSettings.TimeMax = 70 * currentSpeedPinterest),
                  (currentSpeedPinterest = a.Num))
                : "SetSpeedLinkedin" == a.Tag
                ? ((LinkedinSettings.TimeMin = 200 * currentSpeedLinkedin),
                  (LinkedinSettings.TimeMax = 250 * currentSpeedLinkedin),
                  (currentSpeedLinkedin = a.Num))
                : "SetSpeedTinder" == a.Tag
                ? ((TinderSettings.TimeMin = 20 * currentSpeedTinder),
                  (TinderSettings.TimeMax = 25 * currentSpeedTinder),
                  (currentSpeedTinder = a.Num))
                : "SetSpeedTikTok" == a.Tag
                ? ((TikTokSettings.TimeMin = 60 * currentSpeedTikTok),
                  (TikTokSettings.TimeMax = 70 * currentSpeedTikTok),
                  (currentSpeedTikTok = a.Num))
                : "SetTikTokValue" == a.Tag
                ? (StartTikTok = a.Value)
                : "RemoveTagFromListTikTok" == a.Tag
                ? (RemoveTagFromListTikTok(a.TagName), SaveDatabase())
                : "DoneTikTokFollow" == a.Tag
                ? OnTikTokFollow(a.User)
                : "DoneTikTokLike" == a.Tag
                ? OnTikTokLike(a.User)
                : "TikTokTarget" == a.Tag
                ? (TikTokTargets.push(a.target), SaveDatabase())
                : "DoneTikTok" == a.Tag
                ? (TotalTikToks.push(a.target), SaveDatabase())
                : "DoneTikTokData" == a.Tag
                ? (tiktok_data.push(a.target), SaveDatabase())
                : "UpdateTikTokFollowLimit" == a.Tag
                ? ((MaxTikTokFollows = a.limit), SaveDatabase())
                : "UpdateTikTokLikeLimit" == a.Tag
                ? ((MaxTikTokLikes = a.limit), SaveDatabase())
                : "TikTokTarget" == a.Tag
                ? (TikTokTargets.push(a.target), SaveDatabase())
                : "SetFollowTikTok" == a.Tag
                ? (StartTikTok =
                    (StartTikTokFollow = a.Value) || StartTikTokLike ? !0 : !1)
                : "SetLikeTikTok" == a.Tag
                ? ((StartTikTokLike = a.Value),
                  (StartTikTok =
                    StartTikTokFollow || StartTikTokLike ? !0 : !1))
                : "SetSpeedTwitter" == a.Tag
                ? ((TwitterSettings.TimeMin = 200 * currentSpeedTwitter),
                  (TwitterSettings.TimeMax = 250 * currentSpeedTwitter),
                  (currentSpeedTwitter = a.Num))
                : "SetSpeedfacebook" == a.Tag
                ? ((facebookSettings.TimeMin = 60 * currentSpeedfacebook),
                  (facebookSettings.TimeMax = 70 * currentSpeedfacebook),
                  (currentSpeedfacebook = a.Num))
                : "SetfacebookValue" == a.Tag
                ? (Startfacebook = a.Value)
                : "RemoveTagFromListfacebook" == a.Tag
                ? (RemoveTagFromListfacebook(a.TagName), SaveDatabase())
                : "RemoveAccountFromListfacebook" == a.Tag
                ? (RemoveAccountFromListfacebook(a.TagName), SaveDatabase())
                : "DonefacebookFollow" == a.Tag
                ? OnfacebookFollow(a.User)
                : "DonefacebookLike" == a.Tag
                ? OnfacebookLike(a.User)
                : "facebookTarget" == a.Tag
                ? (facebookTargets.push(a.target), SaveDatabase())
                : "Donefacebook" == a.Tag
                ? (Totalfacebooks.push(a.target), SaveDatabase())
                : "DonefacebookData" == a.Tag
                ? (facebook_data.push(a.target), SaveDatabase())
                : "UpdatefacebookFollowLimit" == a.Tag
                ? ((MaxfacebookFollows = a.limit), SaveDatabase())
                : "UpdatefacebookLikeLimit" == a.Tag
                ? ((MaxfacebookLikes = a.limit), SaveDatabase())
                : "facebookTarget" == a.Tag
                ? (facebookTargets.push(a.target), SaveDatabase())
                : "SetFollowfacebook" == a.Tag
                ? (Startfacebook =
                    (StartfacebookFollow = a.Value) || StartfacebookLike
                      ? !0
                      : !1)
                : "SetLikefacebook" == a.Tag
                ? ((StartfacebookLike = a.Value),
                  (Startfacebook =
                    StartfacebookFollow || StartfacebookLike ? !0 : !1))
                : "Error" == a.Tag
                ? HandleErrors(a.Error)
                : "ErrorStoryLike" == a.Tag
                ? (likeError = 10)
                : "ErrorStoryLong" == a.Tag
                ? ((StorySettings.TimeMin = timing_model.min),
                  (StorySettings.TimeMax = timing_model["long"]))
                : "ErrorStory" == a.Tag
                ? ((StorySettings.TimeMin = timing_model.min),
                  (StorySettings.TimeMax = timing_model["long"]),
                  SendMessage("Error", "type", "StoryError", ComPortIndex),
                  SaveDatabase(),
                  SendSettings())
                : "ClearPools" == a.Tag &&
                  (ResetPools(), ResetPools(), SaveDatabase(), SendSettings()));
}
function SendMessage(a, b, c, d) {
  d && ((a = { Tag: a }), (a[b] = c), d.postMessage(a));
}
function RemoveCollectJobByUserSelf(a) {
  run_self = !1;
}
function RemoveCollectJobByUser(a) {
  for (var b = -1, c = 0; c < CollectJobs.length; c++)
    if (CollectJobs[c].user_id == a) {
      b = c;
      break;
    }
  0 <= b && CollectJobs.splice(b, 1);
  SaveDatabase();
}
function IsCollectJobAvailableForUser(a) {
  for (var b = 0; b < CollectJobs.length; b++)
    if (CollectJobs[b].user_id == a) return !0;
  return !1;
}
function getRandomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function GetUserIndexByUserID(a) {
  for (var b = 0; b < UserPool.length; b++)
    if (UserPool[b].user_id == a) return b;
  return -1;
}
function GetFollowingsIndexByUserID(a) {
  for (var b = 0; b < AllFollowings.length; b++)
    if (AllFollowings[b].user_id == a) return b;
  return -1;
}
function IsAlreadyUnfollowed(a) {
  for (var b = 0; b < UnfollowedPool.length; b++)
    if (UnfollowedPool[b].user_id == a) return !0;
  return !1;
}
function DeleteUserIdInUserPool(a) {
  for (var b = UserPool.length - 1; 0 <= b; b--)
    UserPool[b].user_id == a && UserPool.splice(b, 1);
}
function DeleteUserIdInFollowings(a) {
  for (var b = AllFollowings.length - 1; 0 <= b; b--)
    AllFollowings[b].user_id == a && AllFollowings.splice(b, 1);
}
function DeleteUserIdInFollowedPool(a) {
  for (var b = FollowedPool.length - 1; 0 <= b; b--)
    FollowedPool[b].user_id == a && FollowedPool.splice(b, 1);
}
function GetUserFromFollowedPool(a) {
  for (var b = FollowedPool.length - 1; 0 <= b; b--)
    if (FollowedPool[b].user_id == a) return FollowedPool[b];
}
function GetUserFromFollowings(a) {
  for (var b = AllFollowings.length - 1; 0 <= b; b--)
    if (AllFollowings[b].user_id == a) return AllFollowings[b];
}
function GetCollectJobIndex(a) {
  for (var b = 0; b < CollectJobs.length; b++)
    if (CollectJobs[b].user_id == a.user_id) return b;
  return -1;
}
function IsUserFollower(a) {
  for (var b = 0; b < my_followers.length; b++)
    if (my_followers[b].user_id == a) return !0;
  return !1;
}
function IsUserInWhitelist(a) {
  for (var b = 0; b < Whitelist.length; b++)
    if (Whitelist[b].user_id == a) return !0;
  return !1;
}
function RemoveWhitelistUser(a) {
  for (var b = 0; b < Whitelist.length; b++)
    if (Whitelist[b].user_id == a) {
      a = Whitelist.splice(b, 1);
      -1 == GetFollowingsIndexByUserID(a[0].user_id) &&
        AllFollowings.push(a[0]);
      break;
    }
}
function IsInAppFollowedList(a) {
  for (var b = 0; b < FollowedPool.length; b++)
    if (FollowedPool[b].user_id == a.user_id) return !0;
  return !1;
}
function IsNewUser(a) {
  if (0 <= GetUserIndexByUserID(a.user_id)) return !1;
  for (var b = 0; b < FollowedPool.length; b++)
    if (FollowedPool[b].user_id == a.user_id) return !1;
  for (b = 0; b < UnfollowedPool.length; b++)
    if (UnfollowedPool[b].user_id == a.user_id) return !1;
  return !0;
}
function HandleErrors(a) {
  "FollowError" == a.String
    ? ((FollowTime.Time = FollowSettings.ErrorTime),
      (FollowTime.Max = FollowSettings.ErrorTime),
      (FollowSettings.ErrorTime = FollowSettings.ErrorTime),
      DeleteUserIdInUserPool(a.ExtraData.user_id),
      SendMessage("Error", "type", "FollowError", ComPortIndex),
      SendSettings())
    : "UnfollowError" == a.String
    ? ((UnfollowTime.Time = UnfollowSettings.ErrorTime),
      (UnfollowTime.Max = UnfollowSettings.ErrorTime),
      (UnfollowSettings.ErrorTime = UnfollowSettings.ErrorTime),
      DeleteUserIdInFollowings(a.ExtraData.user_id),
      SendMessage("Error", "type", "UnfollowError", ComPortIndex),
      SendSettings())
    : "CollectFollowingError" == a.String
    ? (CollectFollowingsTime.Time = CollectFollowings.ErrorTime)
    : "CollectFollowersError" == a.String
    ? (CollectUsersTime.Time = CollectFollowers.ErrorTime)
    : "LikeError" == a.String
    ? ((LikeOrCommentTime.Time = LikeSettings.ErrorTime),
      (LikeOrCommentTime.Max = LikeSettings.ErrorTime),
      (LikeSettings.ErrorTime = LikeSettings.ErrorTime),
      SendMessage("Error", "type", "LikeError", ComPortIndex),
      SendSettings())
    : "CommentError" == a.String &&
      ((CommentTime.Time = CommentSettings.ErrorTime),
      (CommentTime.Max = CommentSettings.ErrorTime),
      (CommentSettings.ErrorTime = CommentSettings.ErrorTime),
      SendMessage("Error", "type", "CommentError", ComPortIndex),
      SendSettings());
}
function SetMinMax(a, b, c) {
  return Math.min(Math.max(a, b), c);
}
function ExportDatabase() {
  chrome.storage.local.get("InstaBaitDatabase", function (a) {
    (a = a.InstaBaitDatabase) || (a = []);
    var b = { Tag: "InstaBaiterExportedFile" };
    b.Content = a;
    a =
      "data:application/json;base64," +
      btoa(unescape(encodeURIComponent(JSON.stringify(b))));
    chrome.downloads.download({ url: a, filename: "Instoo.json", saveAs: !0 });
  });
}
function ImportDatabase(a) {
  cloud_db = JSON.parse(a);
  (a = cloud_db.Content) || (a = []);
  for (var b = null, c = 0; c < a.length; c++)
    if (CurrentUser && a[c] && a[c].user_id == CurrentUser.user_id) {
      b = a[c].database;
      break;
    }
  chrome.storage.local.get("InstaBaitDatabase", function (d) {
    (d = d.InstaBaitDatabase) || (d = []);
    for (var f = 0; f < d.length && d[f].user_id != CurrentUser.user_id; f++);
    allow_local = !0;
    b &&
      ((UserPool = JSON.parse(b.UserPool)),
      (FollowedPool = JSON.parse(b.FollowedPool)),
      (LikedMedia = JSON.parse(b.LikedMedia)),
      (StoryMedia = JSON.parse(b.StoryMedia)),
      (CommentedMedia = JSON.parse(b.CommentedMedia)),
      (UnfollowedPool = JSON.parse(b.UnfollowedPool)),
      (CollectJobs = JSON.parse(b.CollectJobs)),
      (CollectFollowingsJob = JSON.parse(b.CollectFollowingsJob)),
      (AllFollowings = JSON.parse(b.AllFollowings)),
      (Whitelist = JSON.parse(b.Whitelist)),
      (TagPool = JSON.parse(b.TagPool)),
      (CommentPool = JSON.parse(b.CommentPool)),
      (AccountPool = JSON.parse(b.AccountPool)),
      (user_stats = JSON.parse(b.user_stats)),
      (MediaPool = JSON.parse(b.MediaPool)),
      (my_followers = JSON.parse(b.my_followers)),
      b.AccountTargets && (AccountTargets = JSON.parse(b.AccountTargets)),
      b.blacklist && (blacklist = JSON.parse(b.blacklist)),
      b.filters && (filters = JSON.parse(b.filters)),
      b.reacts && (reacts = JSON.parse(b.reacts)),
      (d = JSON.parse(b.Settings)),
      (unfollow_mode = d.unfollow_mode),
      (FollowSettings = d.FollowSettings),
      (UnfollowSettings = d.UnfollowSettings),
      (CollectFollowers = d.CollectFollowers),
      (CollectFollowings = d.CollectFollowings),
      (UnfollowAfterDays = d.UnfollowAfterDays),
      (LikeSettings = d.LikeSettings),
      (StorySettings = d.StorySettings),
      (CommentSettings = d.CommentSettings),
      (slow = d.slow),
      (Day = d.Day),
      (maxFollows = d.maxFollows),
      (maxUnfollows = d.maxUnfollows),
      d.minPhotos &&
        ((minPhotos = d.minPhotos),
        (maxFollowers = d.maxFollowers),
        (minFollowers = d.minFollowers),
        (maxFollowing = d.maxFollowing),
        (minFollowing = d.minFollowing)),
      (maxLikes = d.maxLikes),
      (maxStories = d.maxStories),
      (maxComments = d.maxComments),
      (StartReact = d.StartReact),
      (EnableFilters = d.EnableFilters),
      (StartSchedule = d.StartSchedule),
      (StartTime = d.StartTime),
      (AutoActions = d.AutoActions),
      (Duration = d.Duration),
      d.round_robin_hashtag && (round_robin_hashtag = d.round_robin_hashtag),
      d.round_robin_account && (round_robin_account = d.round_robin_account),
      d.addIdeal && (addIdeal = d.addIdeal),
      d.hoursLeft && (hoursLeft = d.hoursLeft),
      d.blocked && (blocked = d.blocked),
      (currentSpeed = d.currentSpeed || 1),
      (loaded_cloud = !0),
      d.TikTokSettings && (TikTokSettings = d.TikTokSettings),
      b.user_followers && (user_followers = JSON.parse(b.user_followers)),
      b.TagPoolTikTok && (TagPoolTikTok = JSON.parse(b.TagPoolTikTok)),
      b.FollowedPoolTikTok &&
        (FollowedPoolTikTok = JSON.parse(b.FollowedPoolTikTok)),
      b.LikedMediaTikTok && (LikedMediaTikTok = JSON.parse(b.LikedMediaTikTok)),
      d.facebookSettings && (facebookSettings = d.facebookSettings),
      b.user_followers && (user_followers = JSON.parse(b.user_followers)),
      b.TagPoolfacebook && (TagPoolfacebook = JSON.parse(b.TagPoolfacebook)),
      b.AccountPoolfacebook &&
        (AccountPoolfacebook = JSON.parse(b.AccountPoolfacebook)),
      b.user_stats && (user_stats = JSON.parse(b.user_stats)),
      b.FollowedPoolfacebook &&
        (FollowedPoolfacebook = JSON.parse(b.FollowedPoolfacebook)),
      b.LikedMediafacebook &&
        (LikedMediafacebook = JSON.parse(b.LikedMediafacebook)),
      d.PinterestSettings && (PinterestSettings = d.PinterestSettings),
      b.user_followers && (user_followers = JSON.parse(b.user_followers)),
      b.TagPoolPinterest && (TagPoolPinterest = JSON.parse(b.TagPoolPinterest)),
      b.FollowedPoolPinterest &&
        (FollowedPoolPinterest = JSON.parse(b.FollowedPoolPinterest)),
      b.LikedMediaPinterest &&
        (LikedMediaPinterest = JSON.parse(b.LikedMediaPinterest)),
      b.linkedin_data && (linkedin_data = JSON.parse(b.linkedin_data)),
      b.instagram_data && (instagram_data = JSON.parse(b.instagram_data)),
      b.tiktok_data && (tiktok_data = JSON.parse(b.tiktok_data)),
      b.facebook_data && (facebook_data = JSON.parse(b.facebook_data)),
      d.LinkedinSettings && (LinkedinSettings = d.LinkedinSettings),
      b.user_followers && (user_followers = JSON.parse(b.user_followers)),
      b.TagPoolLinkedin && (TagPoolLinkedin = JSON.parse(b.TagPoolLinkedin)),
      b.FollowedPoolLinkedin &&
        (FollowedPoolLinkedin = JSON.parse(b.FollowedPoolLinkedin)),
      b.LikedMediaLinkedin &&
        (LikedMediaLinkedin = JSON.parse(b.LikedMediaLinkedin)),
      d.TinderSettings && (TinderSettings = d.TinderSettings),
      b.user_followers && (user_followers = JSON.parse(b.user_followers)),
      b.TagPoolTinder && (TagPoolTinder = JSON.parse(b.TagPoolTinder)),
      b.LikedMediaTinder && (LikedMediaTinder = JSON.parse(b.LikedMediaTinder)),
      d.TwitterSettings && (TwitterSettings = d.TwitterSettings),
      b.user_followers && (user_followers = JSON.parse(b.user_followers)),
      b.TagPoolTwitter && (TagPoolTwitter = JSON.parse(b.TagPoolTwitter)),
      b.FollowedPoolTwitter &&
        (FollowedPoolTwitter = JSON.parse(b.FollowedPoolTwitter)),
      b.LikedMediaTwitter &&
        (LikedMediaTwitter = JSON.parse(b.LikedMediaTwitter)),
      b.self_job && (self_job = JSON.parse(b.self_job)),
      CollectFollowingsJob.eof &&
        ((CollectFollowingsJob.eof = !1),
        (CollectFollowingsJob.cursor_key = null)));
  });
  CurrentUser && (CollectFollowingsJob.user_id = CurrentUser.user_id);
  SaveDatabase();
}
function ClearWhite() {
  Whitelist = [];
  SaveDatabase();
  SendMessage("AddedWhitelistUsers", "Users", Whitelist, ComPortIndex);
}
function ResetPools() {
  LikedMediaTikTok = [];
  FollowedPoolTikTok = [];
  FollowedPoolTikTok = [];
  LikedMediaTikTok = [];
  TotalTikToks = [];
  LikedMediafacebook = [];
  FollowedPoolfacebook = [];
  FollowedPoolfacebook = [];
  LikedMediafacebook = [];
  Totalfacebooks = [];
  UserPool = [];
  FollowedPool = [];
  LikedMediaPinterest = [];
  FollowedPoolLinkedin = [];
  LikedMediaLinkedin = [];
  LikedMediaTinder = [];
  FollowedPoolTwitter = [];
  LikedMediaTwitter = [];
  TotalTwitter = [];
  UnfollowedPool = [];
  LikedMedia = [];
  StoryMedia = [];
  likeCount = StoryCount = 0;
  AllFollowings = [];
  blocked = !1;
  hoursLeft = 8;
  LikedMediaPinterest = [];
  FollowedPoolPinterest = [];
  FollowedPoolPinterest = [];
  MediaPool = [];
  CommentedMedia = [];
  CommentedMediaTinder = [];
  Day = String(new Date().getDate()).padStart(2, "0");
  FollowTime.Time = 0;
  UnfollowTime.Time = 0;
  LikeOrCommentTime.Time = 0;
  StoryTime.Time = 0;
  CommentTime.Time = 0;
  SaveDatabase();
  0 == Day % 3 && (blocked = !1);
}
function ResetAll() {
  UserPool = [];
  CollectJobs = [];
  CollectFollowingsJob = {};
  TagPool = [];
  CommentPool = [];
  AccountPool = [];
  MediaPool = [];
  stories = [];
  UserPool = [];
  FollowedPool = [];
  FollowedPoolLinkedin = [];
  LikedMediaLinkedin = [];
  LikedMediaTinder = [];
  CommentedMediaTinder = [];
  TagPoolLinkedin = [];
  FollowedPoolTwitter = [];
  LikedMediaTwitter = [];
  TagPoolTwitter = [];
  blacklist = [];
  StoryMedia = [];
  activity_log = "";
  LikedMedia = [];
  AccountTargets = [];
  CommentedMedia = [];
  UnfollowedPool = [];
  CollectJobs = [];
  AllFollowings = [];
  Whitelist = [];
  TagPool = [];
  CommentPool = [];
  AccountPool = [];
  MediaPool = [];
  FollowedPoolTikTok = [];
  LikedMediaTikTok = [];
  TagPoolTikTok = [];
  FollowedPoolfacebook = [];
  LikedMediafacebook = [];
  TagPoolfacebook = [];
  CollectFollowingsJob = { cursor_key: null, eof: !1 };
  Day = String(new Date().getDate()).padStart(2, "0");
  SaveDatabase();
  SendMessage("RefreshPage", "CloudDatabase", "", ComPortIndex);
}
function CloudDatabase() {
  var a = {};
  a.UserPool = JSON.stringify(UserPool);
  a.LikedMedia = JSON.stringify(LikedMedia);
  a.StoryMedia = JSON.stringify(StoryMedia);
  a.FollowedPool = JSON.stringify(FollowedPool);
  a.FollowedPoolPinterest = JSON.stringify(FollowedPoolPinterest);
  a.LikedMediaPinterest = JSON.stringify(LikedMediaPinterest);
  a.TagPoolPinterest = JSON.stringify(TagPoolPinterest);
  a.linkedin_data = JSON.stringify(linkedin_data);
  a.instagram_data = JSON.stringify(instagram_data);
  a.FollowedPoolTikTok = JSON.stringify(FollowedPoolTikTok);
  a.LikedMediaTikTok = JSON.stringify(LikedMediaTikTok);
  a.TagPoolTikTok = JSON.stringify(TagPoolTikTok);
  a.tiktok_data = JSON.stringify(tiktok_data);
  a.FollowedPoolfacebook = JSON.stringify(FollowedPoolfacebook);
  a.LikedMediafacebook = JSON.stringify(LikedMediafacebook);
  a.TagPoolfacebook = JSON.stringify(TagPoolfacebook);
  a.AccountPoolfacebook = JSON.stringify(AccountPoolfacebook);
  a.user_stats = JSON.stringify(user_stats);
  a.facebook_data = JSON.stringify(facebook_data);
  a.FollowedPoolLinkedin = JSON.stringify(FollowedPoolLinkedin);
  a.LikedMediaLinkedin = JSON.stringify(LikedMediaLinkedin);
  a.TagPoolLinkedin = JSON.stringify(TagPoolLinkedin);
  a.LikedMediaTinder = JSON.stringify(LikedMediaTinder);
  a.CommentedMediaTinder = JSON.stringify(CommentedMediaTinder);
  a.FollowedPoolTwitter = JSON.stringify(FollowedPoolTwitter);
  a.LikedMediaTwitter = JSON.stringify(LikedMediaTwitter);
  a.TagPoolTwitter = JSON.stringify(TagPoolTwitter);
  a.UnfollowedPool = JSON.stringify(UnfollowedPool);
  a.CollectJobs = JSON.stringify(CollectJobs);
  a.CollectFollowingsJob = JSON.stringify(CollectFollowingsJob);
  a.AllFollowings = JSON.stringify(AllFollowings);
  a.Whitelist = JSON.stringify(Whitelist);
  a.TagPool = JSON.stringify(TagPool);
  a.AccountPool = JSON.stringify(AccountPool);
  a.user_stats = JSON.stringify(user_stats);
  a.MediaPool = JSON.stringify(MediaPool);
  a.my_followers = JSON.stringify(my_followers);
  a.user_followers = JSON.stringify(user_followers);
  a.self_job = JSON.stringify(self_job);
  var b = {};
  b.FollowSettings = FollowSettings;
  b.UnfollowSettings = UnfollowSettings;
  b.CollectFollowers = CollectFollowers;
  b.CollectFollowings = CollectFollowings;
  b.UnfollowAfterDays = UnfollowAfterDays;
  b.LikeSettings = LikeSettings;
  b.StorySettings = StorySettings;
  b.TikTokSettings = TikTokSettings;
  b.facebookSettings = facebookSettings;
  b.PinterestSettings = PinterestSettings;
  b.LinkedinSettings = LinkedinSettings;
  b.TwitterSettings = TwitterSettings;
  b.Day = Day;
  b.maxFollows = maxFollows;
  b.maxUnfollows = maxUnfollows;
  b.minPhotos = minPhotos;
  b.maxFollowers = maxFollowers;
  b.minFollowers = minFollowers;
  b.maxFollowing = maxFollowing;
  b.minFollowing = minFollowing;
  b.maxLikes = maxLikes;
  b.maxStories = maxStories;
  b.CommentSettings = CommentSettings;
  b.maxComments = maxComments;
  b.slow = slow;
  b.unfollow_mode = unfollow_mode;
  b.currentSpeed = currentSpeed;
  a.Settings = JSON.stringify(b);
  a.CommentedMedia = JSON.stringify(CommentedMedia);
  a.CommentPool = JSON.stringify(CommentPool);
  SendMessage("CloudDatabase", "CloudDatabase", a, ComPortIndex);
}
function ClearDatabase() {
  if (CurrentUser) {
    var a = {};
    chrome.storage.local.get("InstaBaitDatabase", function (b) {
      (b = b.InstaBaitDatabase) || (b = []);
      for (var c = !0, d = 0; d < b.length; d++)
        if (b[d] && CurrentUser && b[d].user_id == CurrentUser.user_id) {
          b[d].database = a;
          c = !1;
          break;
        }
      c &&
        ((c = {}),
        CurrentUser &&
          ((c.user_id = CurrentUser.user_id), (c.database = a), b.push(c)));
      chrome.storage.local.set({ InstaBaitDatabase: b });
      SendMessage("GotDatabase", "Database", b, ComPortIndex);
    });
  } else SendMessage("RetriveUserHeaders", "User", "", ComPortContent);
}
function SaveDatabase() {
  if (!CurrentUser)
    SendMessage("RetriveUserHeaders", "User", "", ComPortContent);
  else if (
    0 != TagPool.length ||
    0 != AccountTargets.length ||
    0 != TagPoolTwitter.length ||
    0 != TagPoolTikTok.length ||
    0 != TagPoolLinkedin.length ||
    0 != TagPoolPinterest.length
  ) {
    var a = {};
    a.UserPool = JSON.stringify(UserPool);
    a.LikedMedia = JSON.stringify(LikedMedia);
    a.StoryMedia = JSON.stringify(StoryMedia);
    a.FollowedPool = JSON.stringify(FollowedPool);
    a.UnfollowedPool = JSON.stringify(UnfollowedPool);
    a.FollowedPoolTikTok = JSON.stringify(FollowedPoolTikTok);
    a.LikedMediaTikTok = JSON.stringify(LikedMediaTikTok);
    a.FollowedPoolTikTok = JSON.stringify(FollowedPoolTikTok);
    a.LikedMediaTikTok = JSON.stringify(LikedMediaTikTok);
    a.FollowedPoolTikTok = JSON.stringify(FollowedPoolTikTok);
    a.LikedMediaTikTok = JSON.stringify(LikedMediaTikTok);
    a.FollowedPoolTikTok = JSON.stringify(FollowedPoolTikTok);
    a.LikedMediaTikTok = JSON.stringify(LikedMediaTikTok);
    a.FollowedPoolfacebook = JSON.stringify(FollowedPoolfacebook);
    a.LikedMediafacebook = JSON.stringify(LikedMediafacebook);
    a.FollowedPoolfacebook = JSON.stringify(FollowedPoolfacebook);
    a.LikedMediafacebook = JSON.stringify(LikedMediafacebook);
    a.FollowedPoolfacebook = JSON.stringify(FollowedPoolfacebook);
    a.LikedMediafacebook = JSON.stringify(LikedMediafacebook);
    a.FollowedPoolfacebook = JSON.stringify(FollowedPoolfacebook);
    a.LikedMediafacebook = JSON.stringify(LikedMediafacebook);
    a.FollowedPoolPinterest = JSON.stringify(FollowedPoolPinterest);
    a.LikedMediaPinterest = JSON.stringify(LikedMediaPinterest);
    a.FollowedPoolPinterest = JSON.stringify(FollowedPoolPinterest);
    a.LikedMediaPinterest = JSON.stringify(LikedMediaPinterest);
    a.FollowedPoolPinterest = JSON.stringify(FollowedPoolPinterest);
    a.LikedMediaPinterest = JSON.stringify(LikedMediaPinterest);
    a.FollowedPoolPinterest = JSON.stringify(FollowedPoolPinterest);
    a.LikedMediaPinterest = JSON.stringify(LikedMediaPinterest);
    a.linkedin_data = JSON.stringify(linkedin_data);
    a.instagram_data = JSON.stringify(instagram_data);
    a.FollowedPoolLinkedin = JSON.stringify(FollowedPoolLinkedin);
    a.LikedMediaLinkedin = JSON.stringify(LikedMediaLinkedin);
    a.LikedMediaTinder = JSON.stringify(LikedMediaTinder);
    a.CommentedMediaTinder = JSON.stringify(CommentedMediaTinder);
    a.FollowedPoolTwitter = JSON.stringify(FollowedPoolTwitter);
    a.LikedMediaTwitter = JSON.stringify(LikedMediaTwitter);
    a.CollectJobs = JSON.stringify(CollectJobs);
    a.CollectFollowingsJob = JSON.stringify(CollectFollowingsJob);
    a.AllFollowings = JSON.stringify(AllFollowings);
    a.Whitelist = JSON.stringify(Whitelist);
    a.TagPool = JSON.stringify(TagPool);
    a.TagPoolTikTok = JSON.stringify(TagPoolTikTok);
    a.tiktok_data = JSON.stringify(tiktok_data);
    a.TagPoolfacebook = JSON.stringify(TagPoolfacebook);
    a.AccountPoolfacebook = JSON.stringify(AccountPoolfacebook);
    a.user_stats = JSON.stringify(user_stats);
    a.facebook_data = JSON.stringify(facebook_data);
    a.TagPoolPinterest = JSON.stringify(TagPoolPinterest);
    a.TagPoolLinkedin = JSON.stringify(TagPoolLinkedin);
    a.TagPoolTwitter = JSON.stringify(TagPoolTwitter);
    a.LocationPool = JSON.stringify(LocationPool);
    a.reacts = JSON.stringify(reacts);
    a.AccountPool = JSON.stringify(AccountPool);
    a.MediaPool = JSON.stringify(MediaPool);
    a.my_followers = JSON.stringify(my_followers);
    a.user_followers = JSON.stringify(user_followers);
    a.self_job = JSON.stringify(self_job);
    a.AccountTargets = JSON.stringify(AccountTargets);
    a.blacklist = JSON.stringify(blacklist);
    a.filters = JSON.stringify(filters);
    var b = {};
    b.FollowSettings = FollowSettings;
    b.UnfollowSettings = UnfollowSettings;
    b.CollectFollowers = CollectFollowers;
    b.CollectFollowings = CollectFollowings;
    b.UnfollowAfterDays = UnfollowAfterDays;
    b.LikeSettings = LikeSettings;
    b.StorySettings = StorySettings;
    b.TikTokSettings = TikTokSettings;
    b.facebookSettings = facebookSettings;
    b.PinterestSettings = PinterestSettings;
    b.LinkedinSettings = LinkedinSettings;
    b.TinderSettings = TinderSettings;
    b.TwitterSettings = TwitterSettings;
    b.reacts = reacts;
    b.StartReact = StartReact;
    b.EnableFilters = EnableFilters;
    b.Day = Day;
    b.maxFollows = maxFollows;
    b.maxUnfollows = maxUnfollows;
    b.minPhotos = minPhotos;
    b.maxFollowers = maxFollowers;
    b.minFollowers = minFollowers;
    b.maxFollowing = maxFollowing;
    b.minFollowing = minFollowing;
    b.maxLikes = maxLikes;
    b.maxStories = maxStories;
    b.CommentSettings = CommentSettings;
    b.maxComments = maxComments;
    b.slow = slow;
    b.unfollow_mode = unfollow_mode;
    b.reacts = reacts;
    b.StartReact = StartReact;
    b.StartSchedule = StartSchedule;
    b.StartTime = StartTime;
    b.AutoActions = AutoActions;
    b.Duration = Duration;
    b.round_robin_hashtag = round_robin_hashtag;
    b.round_robin_account = round_robin_account;
    b.addIdeal = addIdeal;
    b.hoursLeft = hoursLeft;
    b.blocked = blocked;
    b.currentSpeed = currentSpeed;
    a.Settings = JSON.stringify(b);
    a.CommentedMedia = JSON.stringify(CommentedMedia);
    a.CommentPool = JSON.stringify(CommentPool);
    chrome.storage.local.get("InstaBaitDatabase", function (c) {
      (c = c.InstaBaitDatabase) || (c = []);
      console.log(c);
      for (var d = !0, f = 0; f < c.length; f++)
        if (c[f] && CurrentUser && c[f].user_id == CurrentUser.user_id) {
          a.timestamp = Date.now();
          c[f].database = a;
          c[f].timestamp = Date.now();
          d = !1;
          break;
        }
      d &&
        ((d = {}),
        CurrentUser &&
          ((d.username = CurrentUser.username),
          (d.user_pic_url = CurrentUser.user_pic_url),
          (d.timestamp = Date.now()),
          (d.user_id = CurrentUser.user_id),
          (d.database = a),
          c.push(d)));
      console.log(c);
      chrome.storage.local.set({ InstaBaitDatabase: c });
      SendMessage("GotDatabase", "Database", c, ComPortIndex);
    });
  }
}
function removeDuplicates(a, b) {
  var c = [],
    d = {},
    f;
  for (f in a) d[a[f][b]] = a[f];
  for (f in d) c.push(d[f]);
  return c;
}
function containsObject(a, b) {
  var c;
  for (c = 0; c < b.length; c++) if (b[c] === a) return !0;
  return !1;
}
function addStory(a) {
  blacklist.includes(a.username) ||
    CurrentUser.username == a.username ||
    (stories.push(a), 1e5 > blacklist.length && blacklist.push(a.username));
  stories = removeDuplicates(stories, "username");
  stories = Array.from(
    new Set(
      stories.map(function (b) {
        return b.username;
      })
    )
  ).map(function (b) {
    return stories.find(function (c) {
      return c.username === b;
    });
  });
}
function GrabDatabase() {
  if (CurrentUser) {
    var a = {};
    a.UserPool = JSON.stringify(UserPool);
    a.LikedMedia = JSON.stringify(LikedMedia);
    a.StoryMedia = JSON.stringify(StoryMedia);
    a.FollowedPool = JSON.stringify(FollowedPool);
    a.UnfollowedPool = JSON.stringify(UnfollowedPool);
    a.FollowedPoolTikTok = JSON.stringify(FollowedPoolTikTok);
    a.LikedMediaTikTok = JSON.stringify(LikedMediaTikTok);
    a.FollowedPoolfacebook = JSON.stringify(FollowedPoolfacebook);
    a.LikedMediafacebook = JSON.stringify(LikedMediafacebook);
    a.FollowedPoolPinterest = JSON.stringify(FollowedPoolPinterest);
    a.LikedMediaPinterest = JSON.stringify(LikedMediaPinterest);
    a.linkedin_data = JSON.stringify(linkedin_data);
    a.tiktok_data = JSON.stringify(tiktok_data);
    a.facebook_data = JSON.stringify(facebook_data);
    a.instagram_data = JSON.stringify(instagram_data);
    a.FollowedPoolLinkedin = JSON.stringify(FollowedPoolLinkedin);
    a.LikedMediaLinkedin = JSON.stringify(LikedMediaLinkedin);
    a.LikedMediaTinder = JSON.stringify(LikedMediaTinder);
    a.CommentedMediaTinder = JSON.stringify(CommentedMediaTinder);
    a.FollowedPoolTwitter = JSON.stringify(FollowedPoolTwitter);
    a.LikedMediaTwitter = JSON.stringify(LikedMediaTwitter);
    a.CollectJobs = JSON.stringify(CollectJobs);
    a.CollectFollowingsJob = JSON.stringify(CollectFollowingsJob);
    a.AllFollowings = JSON.stringify(AllFollowings);
    a.Whitelist = JSON.stringify(Whitelist);
    a.TagPool = JSON.stringify(TagPool);
    a.TagPoolTwitter = JSON.stringify(TagPoolTwitter);
    a.TagPoolLinkedin = JSON.stringify(TagPoolLinkedin);
    a.TagPoolTikTok = JSON.stringify(TagPoolTikTok);
    a.TagPoolfacebook = JSON.stringify(TagPoolfacebook);
    a.AccountPoolfacebook = JSON.stringify(AccountPoolfacebook);
    a.user_stats = JSON.stringify(user_stats);
    a.TagPoolPinterest = JSON.stringify(TagPoolPinterest);
    a.AccountPool = JSON.stringify(AccountPool);
    a.MediaPool = JSON.stringify(MediaPool);
    a.my_followers = JSON.stringify(my_followers);
    a.user_followers = JSON.stringify(user_followers);
    a.self_job = JSON.stringify(self_job);
    var b = {};
    b.FollowSettings = FollowSettings;
    b.UnfollowSettings = UnfollowSettings;
    b.CollectFollowers = CollectFollowers;
    b.CollectFollowings = CollectFollowings;
    b.UnfollowAfterDays = UnfollowAfterDays;
    b.LikeSettings = LikeSettings;
    b.StorySettings = StorySettings;
    b.TikTokSettings = TikTokSettings;
    b.facebookSettings = facebookSettings;
    b.PinterestSettings = PinterestSettings;
    b.LinkedinSettings = LinkedinSettings;
    b.TwitterSettings = TwitterSettings;
    b.TinderSettings = TinderSettings;
    b.addIdeal = addIdeal;
    b.hoursLeft = hoursLeft;
    b.blocked = blocked;
    b.Day = Day;
    b.maxFollows = maxFollows;
    b.maxUnfollows = maxUnfollows;
    b.minPhotos = minPhotos;
    b.maxFollowers = maxFollowers;
    b.minFollowers = minFollowers;
    b.maxFollowing = maxFollowing;
    b.minFollowing = minFollowing;
    b.maxLikes = maxLikes;
    b.maxStories = maxStories;
    b.CommentSettings = CommentSettings;
    b.maxComments = maxComments;
    b.slow = slow;
    b.unfollow_mode = unfollow_mode;
    b.currentSpeed = currentSpeed;
    a.Settings = JSON.stringify(b);
    a.CommentedMedia = JSON.stringify(CommentedMedia);
    a.CommentPool = JSON.stringify(CommentPool);
    SendMessage("GotDatabase", "Database", a, ComPortIndex);
  }
}
function LoadDatabase() {
  chrome.storage.local.get("InstaBaitDatabase", function (a) {
    var b = a.InstaBaitDatabase;
    console.log(b);
    b || (b = []);
    console.log(CurrentUser);
    a = null;
    for (var c = 0; c < b.length; c++)
      if (
        b[c].user_id == CurrentUser.user_id ||
        b[c].user_id == CurrentUser.username
      ) {
        a = b[c].database;
        break;
      }
    console.log(a);
    a &&
      ((UserPool = JSON.parse(a.UserPool)),
      (StoryMedia = JSON.parse(a.StoryMedia)),
      (CommentedMedia = JSON.parse(a.CommentedMedia)),
      (LocationPool = JSON.parse(a.LocationPool)),
      (UnfollowedPool = JSON.parse(a.UnfollowedPool)),
      (CollectJobs = JSON.parse(a.CollectJobs)),
      (CollectFollowingsJob = JSON.parse(a.CollectFollowingsJob)),
      (AllFollowings = JSON.parse(a.AllFollowings)),
      (Whitelist = JSON.parse(a.Whitelist)),
      (TagPool = JSON.parse(a.TagPool)),
      (CommentPool = JSON.parse(a.CommentPool)),
      (AccountPool = JSON.parse(a.AccountPool)),
      (user_stats = JSON.parse(a.user_stats)),
      (MediaPool = JSON.parse(a.MediaPool)),
      (my_followers = JSON.parse(a.my_followers)),
      a.AccountTargets && (AccountTargets = JSON.parse(a.AccountTargets)),
      a.blacklist && (blacklist = JSON.parse(a.blacklist)),
      a.filters && (filters = JSON.parse(a.filters)),
      a.reacts && (reacts = JSON.parse(a.reacts)),
      (b = JSON.parse(a.Settings)),
      (unfollow_mode = b.unfollow_mode),
      (FollowSettings = b.FollowSettings),
      (UnfollowSettings = b.UnfollowSettings),
      (CollectFollowers = b.CollectFollowers),
      (CollectFollowings = b.CollectFollowings),
      (UnfollowAfterDays = b.UnfollowAfterDays),
      (LikeSettings = b.LikeSettings),
      (StorySettings = b.StorySettings),
      (CommentSettings = b.CommentSettings),
      (slow = b.slow),
      (Day = b.Day),
      (maxFollows = b.maxFollows),
      (maxUnfollows = b.maxUnfollows),
      (minPhotos = b.minPhotos),
      (maxFollowers = b.maxFollowers),
      (minFollowers = b.minFollowers),
      (maxFollowing = b.maxFollowing),
      (minFollowing = b.minFollowing),
      (maxLikes = b.maxLikes),
      (maxStories = b.maxStories),
      (maxComments = b.maxComments),
      (StartReact = b.StartReact),
      (StartSchedule = b.StartSchedule),
      (EnableFilters = b.EnableFilters),
      (StartTime = b.StartTime),
      (AutoActions = b.AutoActions),
      (Duration = b.Duration),
      b.round_robin_hashtag && (round_robin_hashtag = b.round_robin_hashtag),
      b.round_robin_account && (round_robin_account = b.round_robin_account),
      b.addIdeal && (addIdeal = b.addIdeal),
      b.hoursLeft && (hoursLeft = b.hoursLeft),
      b.blocked && (blocked = b.blocked),
      (currentSpeed = b.currentSpeed || 1),
      a.user_followers && (user_followers = JSON.parse(a.user_followers)),
      a.self_job && (self_job = JSON.parse(a.self_job)),
      b.TikTokSettings && (TikTokSettings = b.TikTokSettings),
      a.TagPoolTikTok && (TagPoolTikTok = JSON.parse(a.TagPoolTikTok)),
      a.FollowedPoolTikTok &&
        (FollowedPoolTikTok = JSON.parse(a.FollowedPoolTikTok)),
      a.LikedMediaTikTok && (LikedMediaTikTok = JSON.parse(a.LikedMediaTikTok)),
      b.facebookSettings && (facebookSettings = b.facebookSettings),
      a.TagPoolfacebook && (TagPoolfacebook = JSON.parse(a.TagPoolfacebook)),
      a.AccountPoolfacebook &&
        (AccountPoolfacebook = JSON.parse(a.AccountPoolfacebook)),
      a.user_stats && (user_stats = JSON.parse(a.user_stats)),
      a.FollowedPoolfacebook &&
        (FollowedPoolfacebook = JSON.parse(a.FollowedPoolfacebook)),
      a.LikedMediafacebook &&
        (LikedMediafacebook = JSON.parse(a.LikedMediafacebook)),
      b.PinterestSettings && (PinterestSettings = b.PinterestSettings),
      a.TagPoolPinterest && (TagPoolPinterest = JSON.parse(a.TagPoolPinterest)),
      a.FollowedPoolPinterest &&
        (FollowedPoolPinterest = JSON.parse(a.FollowedPoolPinterest)),
      a.LikedMediaPinterest &&
        (LikedMediaPinterest = JSON.parse(a.LikedMediaPinterest)),
      a.linkedin_data && (linkedin_data = JSON.parse(a.linkedin_data)),
      a.instagram_data && (instagram_data = JSON.parse(a.instagram_data)),
      a.tiktok_data && (tiktok_data = JSON.parse(a.tiktok_data)),
      a.facebook_data && (facebook_data = JSON.parse(a.facebook_data)),
      b.LinkedinSettings && (LinkedinSettings = b.LinkedinSettings),
      a.user_followers && (user_followers = JSON.parse(a.user_followers)),
      a.self_job && (self_job = JSON.parse(a.self_job)),
      a.TagPoolLinkedin && (TagPoolLinkedin = JSON.parse(a.TagPoolLinkedin)),
      a.FollowedPoolLinkedin &&
        (FollowedPoolLinkedin = JSON.parse(a.FollowedPoolLinkedin)),
      a.LikedMediaLinkedin &&
        (LikedMediaLinkedin = JSON.parse(a.LikedMediaLinkedin)),
      b.TinderSettings && (TinderSettings = b.TinderSettings),
      a.user_followers && (user_followers = JSON.parse(a.user_followers)),
      a.self_job && (self_job = JSON.parse(a.self_job)),
      a.TagPoolTinder && (TagPoolTinder = JSON.parse(a.TagPoolTinder)),
      a.FollowedPoolTinder &&
        (FollowedPoolTinder = JSON.parse(a.FollowedPoolTinder)),
      a.LikedMediaTinder && (LikedMediaTinder = JSON.parse(a.LikedMediaTinder)),
      b.TwitterSettings && (TwitterSettings = b.TwitterSettings),
      a.TagPoolTwitter && (TagPoolTwitter = JSON.parse(a.TagPoolTwitter)),
      a.FollowedPoolTwitter &&
        (FollowedPoolTwitter = JSON.parse(a.FollowedPoolTwitter)),
      a.LikedMediaTwitter &&
        (LikedMediaTwitter = JSON.parse(a.LikedMediaTwitter)),
      CollectFollowingsJob.eof &&
        ((CollectFollowingsJob.eof = !1),
        (CollectFollowingsJob.cursor_key = null)));
    CurrentUser && (CollectFollowingsJob.user_id = CurrentUser.user_id);
  });
}
function ClampSettingsValue() {
  CollectFollowers.Pool = SetMinMax(CollectFollowers.Pool, 100, 1e4);
  CollectFollowers.Interval = SetMinMax(CollectFollowers.Interval, 120, 220);
  CollectFollowers.ErrorTime = SetMinMax(CollectFollowers.ErrorTime, 100, 1e3);
  CollectFollowings.Pool = SetMinMax(CollectFollowings.Pool, 10, 1e4);
  CollectFollowings.Interval = SetMinMax(CollectFollowings.Interval, 120, 330);
  CollectFollowings.ErrorTime = SetMinMax(
    CollectFollowings.ErrorTime,
    100,
    1e3
  );
  UnfollowAfterDays = SetMinMax(UnfollowAfterDays, 0, 100);
}
function ResetSettings() {
  SetDefaultSettings();
  SaveDatabase();
  SendSettings();
}
function UpdateSettings(a) {
  FollowSettings = a.FollowSettings;
  UnfollowSettings = a.UnfollowSettings;
  CollectFollowers = a.CollectFollowers;
  CollectFollowings = a.CollectFollowings;
  UnfollowAfterDays = a.UnfollowAfterDays;
  LikeSettings = a.LikeSettings;
  StorySettings = a.StorySettings;
  CommentSettings = a.CommentSettings;
  maxFollows = parseInt(a.FollowSettings.TimeMin);
  maxUnfollows = parseInt(a.UnfollowSettings.TimeMin);
  maxLikes = parseInt(a.LikeSettings.TimeMin);
  maxStories = parseInt(a.StorySettings.TimeMin);
  maxComments = parseInt(a.CommentSettings.TimeMin);
  maxTikToks = parseInt(a.TikTokSettings.TimeMin);
  Day = a.Day;
  ClampSettingsValue();
  StorySettings.TimeMin = timing_model.min * currentSpeed;
  StorySettings.TimeMax = timing_model.max * currentSpeed;
  1 == WarmupMode &&
    ((StorySettings.TimeMin = 300 * currentSpeed),
    (StorySettings.TimeMax = 600 * currentSpeed));
  8 == currentSpeed &&
    ((StorySettings.TimeMin = 100 * timing_model.min),
    (StorySettings.TimeMax = 100 * timing_model.max));
  3 == currentSpeed &&
    ((StorySettings.TimeMin = 6 * timing_model.min),
    (StorySettings.TimeMax = 6 * timing_model.max));
  2 == currentSpeed &&
    ((StorySettings.TimeMin = timing_model.min),
    (StorySettings.TimeMax = 2 * timing_model.max));
  LikeSettings.TimeMin = 60 + 10 * getRandomInt(0, 6);
  LikeSettings.TimeMax = 200 + 10 * getRandomInt(0, 20);
  FollowSettings.TimeMin = 60 + 10 * getRandomInt(0, 6);
  FollowSettings.TimeMax = 200 + 10 * getRandomInt(0, 20);
  UnfollowSettings.TimeMin = 60 + 10 * getRandomInt(0, 6);
  UnfollowSettings.TimeMax = 200 + 10 * getRandomInt(0, 20);
  CommentSettings.TimeMin = 60;
  CommentSettings.TimeMax = 450;
  1 == slow &&
    ((LikeSettings.TimeMin = 240),
    (LikeSettings.TimeMax = 3520),
    (StorySettings.TimeMin = timing_model.min * currentSpeed),
    (StorySettings.TimeMax = timing_model.max * currentSpeed),
    1 == WarmupMode &&
      ((StorySettings.TimeMin = 300 * currentSpeed),
      (StorySettings.TimeMax = timing_model.max * currentSpeed)),
    (FollowSettings.TimeMin = 240),
    (FollowSettings.TimeMax = 3520),
    (UnfollowSettings.TimeMin = 240),
    (UnfollowSettings.TimeMax = 3520));
  SaveDatabase();
  SendSettings();
}
function SendSettings() {
  var a = {};
  a.FollowSettings = FollowSettings;
  a.UnfollowSettings = UnfollowSettings;
  a.CollectFollowers = CollectFollowers;
  a.CollectFollowings = CollectFollowings;
  a.UnfollowAfterDays = UnfollowAfterDays;
  a.LikeSettings = LikeSettings;
  a.StorySettings = StorySettings;
  a.TikTokSettings = TikTokSettings;
  a.facebookSettings = facebookSettings;
  a.PinterestSettings = PinterestSettings;
  a.LinkedinSettings = LinkedinSettings;
  a.TwitterSettings = TwitterSettings;
  a.TinderSettings = TinderSettings;
  a.CommentSettings = CommentSettings;
  a.Day = Day;
  a.maxFollows = maxFollows;
  a.maxUnfollows = maxUnfollows;
  a.minPhotos = minPhotos;
  a.maxFollowers = maxFollowers;
  a.minFollowers = minFollowers;
  a.maxFollowing = maxFollowing;
  a.minFollowing = minFollowing;
  a.maxLikes = maxLikes;
  a.maxStories = maxStories;
  a.maxComments = maxComments;
  a.maxTikToks = maxTikToks;
  a.slow = slow;
  a.StartReact = StartReact;
  a.unfollow_mode = unfollow_mode;
  a.paid_sub = paid_sub;
  a.UnfollowAfterDays = UnfollowAfterDays;
  a.my_followers = my_followers;
  SendMessage("Settings", "Settings", a, ComPortIndex);
}
function RequestFilteredFollowings(a) {
  var b = [];
  if ("" != a.Text) {
    for (var c = 0; c < AllFollowings.length && !(b.length >= a.Count); c++) {
      var d = AllFollowings[c];
      (0 != d.username.toLowerCase().indexOf(a.Text) &&
        0 != d.full_name.toLowerCase().indexOf(a.Text)) ||
        b.push(d);
    }
    for (c = 0; c < FollowedPool.length && !(b.length >= a.Count); c++)
      (d = FollowedPool[c]),
        (0 != d.username.toLowerCase().indexOf(a.Text) &&
          0 != d.full_name.toLowerCase().indexOf(a.Text)) ||
          b.push(d);
  }
  SendMessage("ReceiveFilteredFollowings", "Users", b, ComPortIndex);
}
function SendWhitelistStatus() {
  var a = {};
  a.Enabled = IsWhitelistFollowings;
  SendMessage("ReceiveWhitelistStatus", "Status", a, ComPortIndex);
}
function AddMedia(a) {
  for (var b = 0; b < a.length; b++) MediaPool.push(a[b]);
}
function UpdateAccountJob(a) {
  for (var b = 0; b < AccountPool.length; b++)
    AccountPool[b].tag_name == a.tag_name &&
      ((AccountPool[b].cursor_key = a.eof ? null : a.cursor_key),
      (AccountPool[b].eof = !1));
  SaveDatabase();
}
function UpdateTagJob(a) {
  for (var b = 0; b < TagPool.length; b++)
    TagPool[b].tag_name == a.tag_name &&
      ((TagPool[b].cursor_key = a.eof ? null : a.cursor_key),
      (TagPool[b].eof = !1));
  SaveDatabase();
}
function AddLocationToList(a) {
  LocationPool.push(new MediaTagOBJ(a));
  SaveDatabase();
}
function RemoveLocationFromList(a) {
  for (var b = -1, c = 0; c < LocationPool.length; c++)
    if (LocationPool[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && LocationPool.splice(b, 1);
  SaveDatabase();
}
function AddTagToList(a) {
  TagPool.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddTagToListTikTok(a) {
  TagPoolTikTok.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddTagToListfacebook(a) {
  TagPoolfacebook.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddAccountToListfacebook(a) {
  AccountPoolfacebook.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddTagToListPinterest(a) {
  TagPoolPinterest.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddTagToListLinkedin(a) {
  TagPoolLinkedin.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddTagToListTwitter(a) {
  TagPoolTwitter.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddCommentToList(a) {
  CommentPool.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddCommentToListTikTok(a) {
  CommentPoolTikTok.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddCommentToListfacebook(a) {
  CommentPoolfacebook.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddCommentToListPinterest(a) {
  CommentPoolPinterest.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddCommentToListTinder(a) {
  CommentPoolTinder.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function AddCommentToListTwitter(a) {
  CommentPoolTwitter.push(new MediaTagOBJ(a));
  SaveDatabase();
  SendSettings();
}
function RemoveCommentFromList(a) {
  for (var b = -1, c = 0; c < CommentPool.length; c++)
    if (CommentPool[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && CommentPool.splice(b, 1);
  SaveDatabase();
}
function RemoveCommentFromListTinder(a) {
  for (var b = -1, c = 0; c < CommentPoolTinder.length; c++)
    if (CommentPoolTinder[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && CommentPoolTinder.splice(b, 1);
  SaveDatabase();
}
function RemoveTagFromListTwitter(a) {
  for (var b = -1, c = 0; c < TagPoolTwitter.length; c++)
    if (TagPoolTwitter[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && TagPoolTwitter.splice(b, 1);
  SaveDatabase();
}
function RemoveTagFromListTikTok(a) {
  for (var b = -1, c = 0; c < TagPoolTikTok.length; c++)
    if (TagPoolTikTok[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && TagPoolTikTok.splice(b, 1);
  SaveDatabase();
}
function RemoveTagFromListfacebook(a) {
  for (var b = -1, c = 0; c < TagPoolfacebook.length; c++)
    if (TagPoolfacebook[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && TagPoolfacebook.splice(b, 1);
  SaveDatabase();
}
function RemoveAccountFromListfacebook(a) {
  for (var b = -1, c = 0; c < AccountPoolfacebook.length; c++)
    if (AccountPoolfacebook[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && AccountPoolfacebook.splice(b, 1);
  SaveDatabase();
}
function RemoveTagFromListPinterest(a) {
  for (var b = -1, c = 0; c < TagPoolPinterest.length; c++)
    if (TagPoolPinterest[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && TagPoolPinterest.splice(b, 1);
  SaveDatabase();
}
function RemoveTagFromListLinkedin(a) {
  for (var b = -1, c = 0; c < TagPoolLinkedin.length; c++)
    if (TagPoolLinkedin[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && TagPoolLinkedin.splice(b, 1);
  SaveDatabase();
}
function RemoveTagFromList(a) {
  for (var b = -1, c = 0; c < TagPool.length; c++)
    if (TagPool[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && TagPool.splice(b, 1);
  SaveDatabase();
}
function AddAccountToList(a) {
  (a
    .split("@")
    .join("")
    .split("@")
    .join("")
    .match(/^[0-9a-z._]+$/) ||
    a.includes(".") ||
    a.includes("_")) &&
    AccountTargets.push(a.split("@").join(""));
  SaveDatabase();
  SendSettings();
}
function RemoveAccountFromList(a) {
  for (var b = -1, c = 0; c < AccountPool.length; c++)
    if (AccountPool[c].tag_name == a) {
      b = c;
      break;
    }
  -1 < b && AccountPool.splice(b, 1);
  SaveDatabase();
  SendSettings();
}
function AddFollowings(a) {
  if (IsWhitelistFollowings)
    AddWhitelistUsers(a),
      CollectFollowingsJob &&
        CollectFollowingsJob.eof &&
        ((IsWhitelistFollowings = !1), SendWhitelistStatus());
  else {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      IsUserInWhitelist(c.user_id) ||
        IsInAppFollowedList(c) ||
        (-1 == GetFollowingsIndexByUserID(c.user_id) &&
          AllFollowings.push(a[b]));
    }
    SaveDatabase();
  }
}
function GetFollowings(a) {}
function WhitelistFollowings(a) {
  if (a) {
    IsWhitelistFollowings = !0;
    CollectFollowingsJob = { eof: !1, cursor_key: null };
    CollectFollowingsJob.user_id = CurrentUser.user_id;
    for (a = 0; a < AllFollowings.length; a++) {
      var b = AllFollowings[a];
      IsUserInWhitelist(b.user_id) || Whitelist.push(b);
    }
    AllFollowings.length = 0;
    SendMessage("AddedWhitelistUsers", "Users", Whitelist, ComPortIndex);
  } else IsWhitelistFollowings = !1;
  SendWhitelistStatus();
  SaveDatabase();
}
function AddWhitelistUsers(a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    DeleteUserIdInFollowings(c.user_id);
    IsUserInWhitelist(c.user_id) || Whitelist.push(c);
  }
  SendMessage("UpdatedWhitelistUsers", "Users", a, ComPortIndex);
  SaveDatabase();
}
function AddUserToWhitelistName(a) {
  IsUserInWhitelist(a.user_id) ||
    (Whitelist.push(a),
    SendMessage("AddedWhitelistUsers", "Users", Whitelist, ComPortIndex),
    SaveDatabase());
}
function AddUserToWhitelist(a) {
  var b = GetUserFromFollowings(a);
  b || (b = GetUserFromFollowedPool(a));
  DeleteUserIdInFollowings(a);
  DeleteUserIdInFollowedPool(a);
  IsUserInWhitelist(a) || Whitelist.push(b);
  SendMessage("AddedWhitelistUsers", "Users", Whitelist, ComPortIndex);
  SaveDatabase();
}
function UpdateCollectFollowingsJob(a) {
  CollectFollowingsJob = a;
}
function ModifyCollectJobCursor(a) {
  for (var b = 0; b < CollectJobs.length; b++)
    if (CollectJobs[b].user_id == a.user_id) {
      CollectJobs[b].cursor_key = a.cursor_key;
      break;
    }
}
function UpdateFollowerCount(a) {
  run_self = a;
}
function ModifyCollectJobCursorSelf(a) {
  self_job = a;
}
function GetFollowers(a) {
  0 == start_self && ((self_job = a), (start_self = !0));
  1 == run_self
    ? SendMessage("DoGetJob", "Job", self_job, ComPortContent)
    : SendMessage("DoGetJob", "Job", a, ComPortContent);
}
function AddCollectJob(a) {
  CollectJobs.push(a);
  SaveDatabase();
}
function SendFollowStatus(a) {
  var b = { FollowedUsers: {}, UnfollowedUsers: {} };
  if (0 < FollowedPool.length) {
    var c = FollowedPool.slice(Math.max(FollowedPool.length - a, 0));
    b.FollowedUsers = c;
  }
  0 < UnfollowedPool.length &&
    ((c = UnfollowedPool.slice(Math.max(UnfollowedPool.length - a, 0))),
    (b.UnfollowedUsers = c));
  SendMessage("DispatchFollowStatus", "AllUsers", b, ComPortIndex);
}
function CheckAccountsDict(a) {
  SendMessage("SendAccountsDict", "Accounts", a, ComPortIndex);
  SaveDatabase();
}
function CheckTagsDict(a) {
  SendMessage("SendTagsDict", "Hashtags", a, ComPortIndex);
  SaveDatabase();
}
function CheckFollowers(a) {
  SendMessage("SendFollowers", "Status", a, ComPortIndex);
  SaveDatabase();
}
function AddUsersToDatabase(a) {
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    IsNewUser(c) &&
      ((c = new User(c.username, c.user_id, c.full_name, c.user_pic_url, 0)),
      UserPool.push(c));
  }
  SaveDatabase();
}
function FollowUser(a) {
  SendMessage("FollowUser", "User", a, ComPortContent);
}
function UnfollowUser(a) {
  IsUserInWhitelist(a.user_id)
    ? DeleteUserIdInFollowings(a.user_id)
    : IsAlreadyUnfollowed(a.user_id)
    ? DeleteUserIdInFollowings(a.user_id)
    : SendMessage("UnfollowUser", "User", a, ComPortContent);
}
function OnLikedMedia(a) {
  LikedMedia.push(a);
  SendMessage("OnLikedMediaComplete", "Media", a, ComPortIndex);
  activity_log += "Instagram: Liked " + a.shortcode + ",<br>";
  LikeSettings.ErrorTime = 1800;
}
function OnStoryMedia(a) {
  SendMessage("OnStoryMediaComplete", "Media", a, ComPortIndex);
  activity_log += "Instagram: Watched Story " + a.username + ",<br>";
  StorySettings.ErrorTime = 1800;
}
function OnCommentedMedia(a) {
  CommentedMedia.push(a);
  SendMessage("OnCommentedMediaComplete", "Media", a, ComPortIndex);
  CommentSettings.ErrorTime = 1800;
  activity_log += "Instagram: DMed " + a.username + ",<br>";
}
function OnFollowedUser(a) {
  a = GetUserIndexByUserID(a.user_id);
  a = UserPool.splice(a, 1);
  0 < a.length &&
    ((a[0].followed_time = Date.now()),
    FollowedPool.push(a[0]),
    SendMessage("UserFollowComplete", "User", a[0], ComPortIndex),
    (activity_log += "Instagram: Followed " + a[0].username + ",<br>"),
    (FollowSettings.ErrorTime = 1800));
}
function OnFollowedUserStory(a) {
  FollowedPool.push(a);
  SendMessage("UserFollowComplete", "User", a, ComPortIndex);
  activity_log += "Instagram: Followed " + a.username + ",<br>";
  FollowSettings.ErrorTime = 1800;
}
function OnLinkedinFollow(a) {
  FollowedPoolLinkedin.push(a);
  SendMessage("UserFollowCompleteLinkedin", "User", a, ComPortIndex);
  activity_log += "Linkedin: Connected " + a.username + ",<br>";
}
function OnTikTokFollow(a) {
  FollowedPoolTikTok.push(a);
  SendMessage("UserFollowCompleteTikTok", "User", a, ComPortIndex);
  activity_log += "TikTok: Followed " + a.username + ",<br>";
}
function OnTikTokLike(a) {
  LikedMediaTikTok.push(a);
  SendMessage("UserLikeCompleteTikTok", "User", a, ComPortIndex);
  activity_log += "TikTok: Liked " + a.username + ",<br>";
}
function OnfacebookFollow(a) {
  FollowedPoolfacebook.push(a);
  SendMessage("UserFollowCompletefacebook", "User", a, ComPortIndex);
  activity_log += "facebook: Followed " + a.username + ",<br>";
}
function OnfacebookLike(a) {
  LikedMediafacebook.push(a);
  SendMessage("UserLikeCompletefacebook", "User", a, ComPortIndex);
  activity_log += "facebook: Liked " + a.username + ",<br>";
}
function OnPinterestFollow(a) {
  FollowedPoolPinterest.push(a);
  SendMessage("UserFollowCompletePinterest", "User", a, ComPortIndex);
  activity_log += "Pinterest: Followed " + a.username + ",<br>";
}
function OnPinterestLike(a) {
  LikedMediaPinterest.push(a);
  SendMessage("UserLikeCompletePinterest", "User", a, ComPortIndex);
  activity_log += "Pinterest: Liked " + a.username + ",<br>";
}
function OnLinkedinLike(a) {
  LikedMediaLinkedin.push(a);
  SendMessage("UserLikeCompleteLinkedin", "User", a, ComPortIndex);
  activity_log += "Linkedin: Collected lead " + a.username + ",<br>";
}
function OnTinderLike(a) {
  LikedMediaTinder.push(a);
  SendMessage("UserLikeCompleteTinder", "User", a, ComPortIndex);
  activity_log += "Tinder: Liked " + a.username + ",<br>";
}
function OnTwitterFollow(a) {
  FollowedPoolTwitter.push(a);
  FollowedPoolTwitter = removeDuplicates(FollowedPoolTwitter, "username");
  SendMessage("UserFollowCompleteTwitter", "User", a, ComPortIndex);
  activity_log += "Twitter: Followed " + a.username + ",<br>";
}
function OnTwitterLike(a) {
  LikedMediaTwitter.push(a);
  LikedMediaTwitter = removeDuplicates(LikedMediaTwitter, "username");
  SendMessage("UserLikeCompleteTwitter", "User", a, ComPortIndex);
  activity_log += "Twitter: Liked " + a.username + ",<br>";
}
function OnUnfollowedUser(a) {
  UnfollowedPool.push(a);
  var b = GetFollowingsIndexByUserID(a.user_id);
  b = AllFollowings.splice(b, 1);
  SendMessage("UserUnfollowComplete", "User", a, ComPortIndex);
  UnfollowSettings.ErrorTime = 1800;
  activity_log += "Instagram: Unfollowed " + b[0] + ",<br>";
}
function UserLoggedOut() {
  SendMessage("UserLoggedOut", "User", CurrentUser, ComPortIndex);
  CurrentUser = null;
  IsUserLoggedIn = !1;
}
function UpdateCurrentUser(a) {
  a
    ? (CurrentUser && a.username != CurrentUser.username && UserLoggedOut(),
      CurrentUser || UserLoggedOut(),
      (CurrentUser && CurrentUser.username == a.username) ||
        SendMessage("UserLoggedIn", "User", a, ComPortIndex),
      (CurrentUser && a.user_id == CurrentUser.user_id) ||
        ((CurrentUser = a),
        (IsUserLoggedIn = !0),
        (last_story = {
          StartReact: StartReact,
          reacts: reacts || [],
          CommentedMedia: CommentedMedia,
          maxComments: maxComments,
          CommentPool: CommentPool,
          StartComment: StartComment,
          recents: recents,
          currentSpeed: currentSpeed,
          backgroundDMs: backgroundDMs,
          unfollowInstoo: unfollow_mode,
          EnableFilters: EnableFilters,
          blacklist: blacklist,
          filters: filters,
          minPhotos: minPhotos,
          maxFollowers: maxFollowers,
          minFollowers: minFollowers,
          maxFollowing: maxFollowing,
          minFollowing: minFollowing,
          RankedTargets: RankedTargets,
          storyUser: "",
          getStats: getStats,
          LikedMedia: LikedMedia,
          username: CurrentUser.username,
          Whitelist: Whitelist,
          StartUnfollow: StartUnfollow,
          StartFollow: StartFollow,
          StartLike: StartLike,
          maxFollows: maxFollows,
          FollowPoolSize: FollowedPool.length,
          maxLikes: maxLikes,
          LikePoolSize: likeCount,
          UnfollowPoolSize: UnfollowedPool.length,
          maxUnfollows: maxUnfollows,
          likeError: likeError,
        }),
        LoadDatabase()))
    : CurrentUser && UserLoggedOut();
}
function UpdateStatus(a) {
  StatusUpdateTime.Time -= a;
  0 > StatusUpdateTime.Time &&
    ComPortIndex &&
    ((StatusUpdateTime.Time = StatusUpdateInterval),
    (a = {}),
    (a.getStats = getStats),
    (a.AccountTargets = AccountTargets),
    (a.addIdeal = addIdeal),
    (a.hoursLeft = hoursLeft),
    (a.user_stats = user_stats),
    (a.blocked = blocked),
    a.StartLinkedinFollow,
    a.StartLinkedinLike,
    (a.EnableFilters = EnableFilters),
    (a.unfollowInstoo = unfollow_mode),
    (a.TagPoolTwitter = TagPoolTwitter),
    (a.linkedin_data = linkedin_data),
    (a.instagram_data = instagram_data),
    (a.unfollow_mode = unfollow_mode),
    (a.round_robin_account = round_robin_account),
    (a.round_robin_hashtag = round_robin_hashtag),
    (a.StartFollow = StartFollow),
    (a.IdealTargets = IdealTargets),
    (a.RankedTargets = RankedTargets),
    (a.StartUnfollow = StartUnfollow),
    (a.backgroundDMs = backgroundDMs),
    (a.activity_log = activity_log),
    (a.true_analytics = true_analytics),
    (a.StartLike = StartLike),
    (a.StartTikTokLike = StartTikTokLike),
    (a.StartTikTokFollow = StartTikTokFollow),
    (a.StartTikTok = StartTikTok),
    (a.MaxTikTokFollows = MaxTikTokFollows),
    (a.MaxTikTokLikes = MaxTikTokLikes),
    (a.TikTokTime = TikTokTime),
    (a.TikTokTargets = TikTokTargets),
    (a.FollowedPoolTikTokSize = FollowedPoolTikTok.length),
    (a.tiktok_data = tiktok_data),
    (a.StartfacebookLike = StartfacebookLike),
    (a.StartfacebookFollow = StartfacebookFollow),
    (a.Startfacebook = Startfacebook),
    (a.MaxfacebookFollows = MaxfacebookFollows),
    (a.MaxfacebookLikes = MaxfacebookLikes),
    (a.facebookTime = facebookTime),
    (a.facebookTargets = facebookTargets),
    (a.FollowedPoolfacebookSize = FollowedPoolfacebook.length),
    (a.facebook_data = facebook_data),
    (a.StartPinterestLike = StartPinterestLike),
    (a.StartPinterestFollow = StartPinterestFollow),
    (a.StartPinterest = StartPinterest),
    (a.MaxPinterestFollows = MaxPinterestFollows),
    (a.MaxPinterestLikes = MaxPinterestLikes),
    (a.PinterestTime = PinterestTime),
    (a.PinterestTargets = PinterestTargets),
    (a.FollowedPoolPinterestSize = FollowedPoolPinterest.length),
    (a.StartLinkedinLike = StartLinkedinLike),
    (a.StartLinkedinFollow = StartLinkedinFollow),
    (a.StartLinkedin = StartLinkedin),
    (a.MaxLinkedinFollows = MaxLinkedinFollows),
    (a.MaxLinkedinLikes = MaxLinkedinLikes),
    (a.LinkedinTime = LinkedinTime),
    (a.LinkedinTargets = LinkedinTargets),
    (a.StartTinderLike = StartTinderLike),
    (a.StartTinderFollow = StartTinderFollow),
    (a.StartTinder = StartTinder),
    (a.MaxTinderFollows = MaxTinderFollows),
    (a.MaxTinderLikes = MaxTinderLikes),
    (a.TinderTime = TinderTime),
    (a.TinderTargets = TinderTargets),
    (a.reacts = reacts),
    (a.StartReact = StartReact),
    (a.StartTwitterLike = StartTwitterLike),
    (a.StartTwitterFollow = StartTwitterFollow),
    (a.StartTwitter = StartTwitter),
    (a.MaxTwitterFollows = MaxTwitterFollows),
    (a.MaxTwitterLikes = MaxTwitterLikes),
    (a.TwitterTime = TwitterTime),
    (a.TwitterTargets = TwitterTargets),
    (a.minPhotos = minPhotos),
    (a.minFollowers = minFollowers),
    (a.maxFollowers = maxFollowers),
    (a.minFollowing = minFollowing),
    (a.maxFollowing = maxFollowing),
    (a.analytics = analytics),
    (a.CollectFollowingsJob = CollectFollowingsJob),
    (a.StartStory = StartStory),
    (a.user_followers = user_followers),
    (a.stored_accounts = stored_accounts),
    (a.StartSchedule = StartSchedule),
    (a.StartTime = StartTime),
    (a.AutoActions = AutoActions),
    (a.Duration = Duration),
    (a.blacklist = blacklist),
    (a.filters = filters),
    (a.LikedMedia = LikedMedia),
    (a.run_self = run_self),
    (a.self_job = self_job),
    (a.StatusUpdateTime = StatusUpdateTime),
    (a.MediaPool = MediaPool),
    (a.TagPool = TagPool),
    (a.StorySettings = StorySettings),
    (a.FollowedPool = FollowedPool),
    (a.StartComment = StartComment),
    (a.UserPoolSize = UserPool.length),
    (a.LikePoolSize = LikedMedia.length),
    (a.StoryPoolSize = StoryMedia.length),
    (a.CommentPoolSize = CommentedMedia.length),
    (a.FollowedPoolSize = FollowedPool.length),
    (a.TikTokSettings = TikTokSettings),
    (a.LikedMediaTikTokSize = LikedMediaTikTok.length),
    (a.FollowedPoolTikTok = FollowedPoolTikTok),
    (a.LikedPoolTikTokSize = LikedMediaTikTok.length),
    (a.LikedPoolTikTok = LikedMediaTikTok),
    (a.TikTokSize = TotalTikToks.length),
    (a.TotalTikToks = TotalTikToks),
    (a.facebookSettings = facebookSettings),
    (a.LikedMediafacebook = LikedMediafacebook),
    (a.FollowedPoolfacebook = FollowedPoolfacebook),
    (a.LikedPoolfacebookSize = LikedMediafacebook.length),
    (a.LikedPoolfacebook = LikedMediafacebook),
    (a.facebookSize = Totalfacebooks.length),
    (a.Totalfacebooks = Totalfacebooks),
    (a.PinterestSettings = PinterestSettings),
    (a.LikedMediaPinterestSize = LikedMediaPinterest.length),
    (a.FollowedPoolPinterest = FollowedPoolPinterest),
    (a.LikedPoolPinterestSize = LikedMediaPinterest.length),
    (a.LikedPoolPinterest = LikedMediaPinterest),
    (a.PinterestSize = TotalPinterests.length),
    (a.TotalPinterests = TotalPinterests),
    (a.PinterestSettings = PinterestSettings),
    (a.LikedMediaPinterestSize = LikedMediaPinterest.length),
    (a.FollowedPoolPinterest = FollowedPoolPinterest),
    (a.LikedPoolPinterestSize = LikedMediaPinterest.length),
    (a.LikedPoolPinterest = LikedMediaPinterest),
    (a.PinterestSize = TotalPinterests.length),
    (a.TotalPinterests = TotalPinterests),
    (a.LinkedinSettings = LinkedinSettings),
    (a.FollowedPoolLinkedinSize = FollowedPoolLinkedin.length),
    (a.LikedMediaLinkedinSize = LikedMediaLinkedin.length),
    (a.FollowedPoolLinkedin = FollowedPoolLinkedin),
    (a.LikedPoolLinkedinSize = LikedMediaLinkedin.length),
    (a.LikedPoolLinkedin = LikedMediaLinkedin),
    (a.LinkedinSize = TotalLinkedins.length),
    (a.TotalLinkedins = TotalLinkedins),
    (a.TinderSettings = TinderSettings),
    (a.FollowedPoolLinkedinSize = FollowedPoolLinkedin.length),
    (a.LikedMediaTinderSize = LikedMediaTinder.length),
    (a.LikedMediaTinder = LikedMediaTinder),
    (a.TwitterSettings = TwitterSettings),
    (a.FollowedPoolTwitterSize = FollowedPoolTwitter.length),
    (a.LikedMediaTwitterSize = LikedMediaTwitter.length),
    (a.FollowedPoolTwitter = FollowedPoolTwitter),
    (a.LikedPoolTwitterSize = LikedMediaTwitter.length),
    (a.LikedMediaTwitter = LikedMediaTwitter),
    (a.UnfollowedPoolSize = UnfollowedPool.length),
    (a.CurrentUser = CurrentUser),
    (a.CollectJobs = CollectJobs),
    (a.maxFollows = maxFollows),
    (a.maxUnfollows = maxUnfollows),
    (a.StoryTime = StoryTime),
    (a.CheckFollowTime = CheckFollowTime),
    (a.maxLikes = maxLikes),
    (a.CollectMediaTime = CollectMediaTime),
    (a.StoryMedia = StoryMedia),
    (a.StoryCount = StoryCount),
    (a.maxStories = maxStories),
    (a.maxComments = maxComments),
    (a.Day = Day),
    (a.stories = stories),
    (a.CommentTime = CommentTime),
    (a.StoryTime = StoryTime),
    (a.CommentSettings = CommentSettings),
    (a.CommentPool = CommentPool),
    (a.UnfollowAfterDays = UnfollowAfterDays),
    (a.UnfollowTime = UnfollowTime),
    (a.FollowTime = FollowTime),
    (a.LikeOrCommentTime = LikeOrCommentTime),
    (a.StoryTime = StoryTime),
    (a.CommentTime = CommentTime),
    (a.CollectFollowings = CollectFollowings),
    (a.AllFollowings = AllFollowings),
    (a.CollectJobs = CollectJobs),
    (a.TagPool = TagPool),
    (a.AccountPool = AccountPool),
    (a.CollectFollowingsJob = CollectFollowingsJob),
    (a.CollectJobs = CollectJobs),
    (a.MediaPool = MediaPool),
    (a.UserPool = UserPool),
    SendMessage("StatusUpdate", "Status", a, ComPortIndex));
}
function UpdateCollectFollowings(a) {
  CollectFollowingsJob &&
    ((CollectFollowingsTime.Time -= a),
    0 > CollectFollowingsTime.Time &&
      CollectFollowingsJob &&
      CollectFollowingsJob.user_id &&
      !CollectFollowingsJob.eof &&
      (CollectFollowings.Pool > AllFollowings.length ||
        IsWhitelistFollowings) &&
      ((CollectFollowingsTime.Time = CollectFollowings.Interval),
      SendMessage(
        "DoCollectFollowings",
        "Job",
        CollectFollowingsJob,
        ComPortContent
      )));
}
function UpdateCollectJob(a) {
  CollectUsersTime.Time -= a;
  0 > CollectUsersTime.Time &&
    0 < CollectJobs.length &&
    5 > stories.length &&
    ((CollectUsersTime.Time = CollectFollowers.Interval),
    (a = GetCollectJobIndex(
      CollectJobs[getRandomInt(0, CollectJobs.length - 1)]
    )),
    0 <= a &&
      ((a = CollectJobs.slice(a)),
      SendMessage("DoCollectJob", "Job", a[0], ComPortContent)));
}
function UpdateCollectAccountMediaJob(a) {
  CollectMediaTime.Time -= a;
  0 > CollectMediaTime.Time &&
    2e4 > MediaPool.length &&
    0 < AccountPool.length &&
    5 > stories.length &&
    ((CollectMediaTime.Time = getRandomInt(120, 320)),
    (a = getRandomInt(0, AccountPool.length - 1)),
    0 <= a &&
      ((a = AccountPool.slice(a)),
      SendMessage(
        "DoCollectMediaFromAccount",
        "MediaTag",
        a[0],
        ComPortContent
      )));
}
function UpdateCollectLocationJob(a) {
  CollectMediaTime.Time -= a;
  0 > CollectMediaTime.Time &&
    2e4 > MediaPool.length &&
    0 < LocationPool.length &&
    5 > stories.length &&
    ((CollectMediaTime.Time = getRandomInt(
      FollowSettings.TimeMin,
      FollowSettings.TimeMax
    )),
    (a = getRandomInt(0, LocationPool.length - 1)),
    0 <= a &&
      ((a = LocationPool.slice(a)),
      SendMessage(
        "DoCollectMediaFromLocation",
        "MediaTag",
        a[0],
        ComPortContent
      )));
}
function UpdateCollectMediaJob(a) {
  CollectMediaTime.Time -= a;
  0 > CollectMediaTime.Time &&
    2e4 > MediaPool.length &&
    0 < TagPool.length &&
    5 > stories.length &&
    ((CollectMediaTime.Time = getRandomInt(120, 320)),
    (a = getRandomInt(0, TagPool.length - 1)),
    0 <= a &&
      SendMessage(
        "DoCollectMediaFromTag",
        "MediaTag",
        TagPool[a],
        ComPortContent
      ));
}
function UpdateCollectStoriesAccounts(a) {
  CollectAccountsTime.Time -= a;
  0 > CollectAccountsTime.Time &&
    0 < AccountTargets.length &&
    5 > stories.length &&
    ((a = getRandomInt(5, 10)),
    (CollectAccountsTime.Time = a),
    (a = getRandomInt(0, AccountTargets.length - 1)),
    (a = AccountTargets.splice(a, 1)),
    SendMessage("CollectStoriesFromAccount", "variables", a, ComPortContent));
}
function UpdateCollectStories(a) {
  CollectTagsTime.Time -= a;
  0 > CollectTagsTime.Time &&
    0 < collect_Tags.length &&
    5 > stories.length &&
    ((a = getRandomInt(5, 10)),
    (CollectTagsTime.Time = a),
    (a = getRandomInt(0, collect_Tags.length - 1)),
    (a = collect_Tags.splice(a, 1)),
    SendMessage("CollectStoriesFromTag", "variables", a, ComPortContent));
}
function UpdateCommentMedia(a) {
  if (
    StartComment &&
    ((CommentTime.Time -= a), 0 > CommentTime.Time && 0 < MediaPool.length)
  ) {
    a = getRandomInt(400, 450);
    CommentTime.Time = a;
    CommentTime.Max = a;
    a = getRandomInt(8, 10);
    getRandomInt(0, 10) > a &&
      ((CommentTime.Time = LikeSettings.ErrorTime),
      (CommentTime.Max = LikeSettings.ErrorTime),
      (FollowSettings.ErrorTime = FollowSettings.ErrorTime));
    a = getRandomInt(0, MediaPool.length - 1);
    a = MediaPool.splice(a, 1);
    var b = getRandomInt(0, CommentPool.length - 1);
    SendMessage(
      "DoCommentMedia",
      "Media",
      { media: a[0], comment: CommentPool[b] },
      ComPortContent
    );
  }
}
function UpdateStory(a) {
  if (StartStory && ComPortIndex) {
    chrome.tabs.query(
      { url: "https://www.instagram.com/*", currentWindow: !0 },
      function (f) {
        if (1 < f.length)
          for (var e = 1; e < f.length; e++)
            chrome.tabs.remove(f[e].id, function () {});
      }
    );
    StoryTime.Time -= a;
    var b = [];
    $.each(AccountTargets, function (f, e) {
      -1 === $.inArray(e, b) && b.push(e);
    });
    AccountTargets = b;
    SendMessage("Timer", "Time", StoryTime.Time, ComPortContent);
    a = getRandomInt(0, TagPool.length - 1);
    if (
      0 <= a &&
      0 > StoryTime.Time &&
      0 >= stories.length &&
      0 < TagPool.length &&
      0 == AccountTargets.length
    ) {
      chrome.tabs.query({ url: "https://www.instagram.com/*" }, function (f) {
        console.log(f);
        console.log(f.length);
        if (1 < f.length)
          for (var e = 1; e < f.length; e++)
            console.log(e), chrome.tabs.remove(f[e].id, function () {});
      });
      var c = TagPool[round_robin_hashtag % TagPool.length];
      round_robin_hashtag++;
      a = getRandomInt(StorySettings.TimeMin, StorySettings.TimeMax);
      StoryTime.Time = a;
      StoryTime.Max = a;
      StorySettings.TimeMin = timing_model.min * currentSpeed;
      StorySettings.TimeMax = timing_model.max * currentSpeed;
      8 == currentSpeed &&
        ((StorySettings.TimeMin = 4500), (StorySettings.TimeMax = 12e3));
      2 == currentSpeed &&
        ((StorySettings.TimeMin = timing_model.min),
        (StorySettings.TimeMax = 2 * timing_model.max));
      chrome.tabs.query({ windowType: "normal" }, function (f) {
        for (var e = 0; e < f.length; e++) {
          var g = encodeURIComponent(f[e].url);
          encodeURIComponent(f[e].title);
          g.includes("instagram.com") &&
            c &&
            (chrome.tabs.update(f[e].id, {
              url: "https://www.instagram.com/explore/tags/" + c.tag_name,
            }),
            setTimeout(function () {
              SendMessage(
                "gatherHashtags",
                "CurrentUser",
                "CurrentUser",
                ComPortContent
              );
            }, 1e4));
        }
      });
      SaveDatabase();
    } else if (
      0 > StoryTime.Time &&
      0 >= stories.length &&
      0 < AccountTargets.length
    )
      chrome.tabs.query({ url: "https://www.instagram.com/*" }, function (f) {
        console.log(f);
        console.log(f.length);
        if (1 < f.length)
          for (var e = 1; e < f.length; e++)
            console.log(e), chrome.tabs.remove(f[e].id, function () {});
      }),
        (a = getRandomInt(StorySettings.TimeMin, StorySettings.TimeMax)),
        (StoryTime.Time = a),
        (StoryTime.Max = a),
        (loopCount += 1),
        loopCount >= 2 * AccountTargets.length &&
          (SendMessage("LoopingTargets", "Media", loopAccounts, ComPortIndex),
          (loopCount = 0),
          (loopAccounts = "")),
        (StorySettings.TimeMin = timing_model.min * currentSpeed),
        (StorySettings.TimeMax = timing_model.max * currentSpeed),
        8 == currentSpeed &&
          ((StorySettings.TimeMin = 4500), (StorySettings.TimeMax = 12e3)),
        2 == currentSpeed &&
          ((StorySettings.TimeMin = timing_model.min),
          (StorySettings.TimeMax = 2 * timing_model.max)),
        chrome.tabs.query({ windowType: "normal" }, function (f) {
          var e = !1;
          getRandomInt(0, AccountTargets.length - 1);
          var g = AccountTargets[round_robin_account % AccountTargets.length];
          round_robin_account++;
          loopAccounts += g + ", ";
          for (var h = 0; h < f.length; h++) {
            var k = encodeURIComponent(f[h].url);
            encodeURIComponent(f[h].title);
            k.includes("instagram.com") &&
              e &&
              chrome.tabs.remove(f[h].id, function () {});
            k.includes("instagram.com") &&
              g &&
              ((e = !0),
              g.includes("https://") && (g = g.split("/")[3]),
              (k = "https://www.instagram.com/" + g),
              chrome.tabs.update(f[h].id, { url: k }),
              (activeTab = h),
              (last_story = g),
              --likeError,
              setTimeout(function () {
                SendMessage(
                  "GatherAccountTargets",
                  "CurrentUser",
                  g,
                  ComPortContent
                );
              }, 1e4));
          }
          0 == e &&
            ((k = "https://www.instagram.com/" + g),
            chrome.tabs.create({ url: "https://www.instagram.com/" + g }));
        }),
        SaveDatabase();
    else if (0 > StoryTime.Time && 0 < stories.length) {
      chrome.tabs.query({ url: "https://www.instagram.com/*" }, function (f) {
        console.log(f);
        console.log(f.length);
        if (1 < f.length)
          for (var e = 1; e < f.length; e++)
            console.log(e), chrome.tabs.remove(f[e].id, function () {});
      });
      StoryCount += 1;
      loopCount = 0;
      loopAccounts = "";
      a = getRandomInt(StorySettings.TimeMin, StorySettings.TimeMax);
      StoryTime.Time = a;
      StoryTime.Max = a;
      StorySettings.TimeMin = timing_model.min * currentSpeed;
      StorySettings.TimeMax = timing_model.max * currentSpeed;
      1 == WarmupMode &&
        ((StorySettings.TimeMin = 300 * currentSpeed),
        (StorySettings.TimeMax = timing_model.max * currentSpeed));
      1 == blocked &&
        ((StorySettings.TimeMin = 960), (StorySettings.TimeMax = 2400));
      2 == currentSpeed &&
        ((StorySettings.TimeMin = timing_model.min),
        (StorySettings.TimeMax = 2 * timing_model.max));
      SaveDatabase();
      SendSettings();
      var d = !1;
      getRandomInt(8, 10);
      a = getRandomInt(0, stories.length - 1);
      MediaTag1 = stories.splice(a, 1);
      StoryMedia.push(MediaTag1[0]);
      blacklist.push(MediaTag1[0].username);
      a = checkObject(MediaTag1[0].user_id, analytics);
      true_analytics.push(a);
      SendMessage("OnStoryMediaComplete", "Media", MediaTag1[0], ComPortIndex);
      activity_log +=
        "Instagram: Watched Story " +
        MediaTag1[0].username +
        " from target " +
        MediaTag1[0].target +
        ",<br>";
      "function" === typeof chrome.tabs.getAllInWindow
        ? chrome.tabs.query({ windowType: "normal" }, function (f) {
            for (var e = 0; e < f.length; e++) {
              var g = encodeURIComponent(f[e].url);
              encodeURIComponent(f[e].title);
              g.includes("instagram.com") &&
                d &&
                chrome.tabs.remove(f[e].id, function () {});
              if (g.includes("instagram.com") && MediaTag1[0]) {
                instagram_tab = f[e].id;
                d = !0;
                chrome.tabs.update(f[e].id, {
                  url:
                    "https://www.instagram.com/stories/" +
                    MediaTag1[0].username,
                });
                activeTab = e;
                --likeError;
                CurrentUser &&
                  CurrentUser &&
                  (last_story = {
                    StartReact: StartReact,
                    reacts: reacts || [],
                    CommentedMedia: CommentedMedia,
                    maxComments: maxComments,
                    CommentPool: CommentPool,
                    unfollowInstoo: unfollow_mode,
                    blacklist: blacklist,
                    filters: filters,
                    EnableFilters: EnableFilters,
                    minPhotos: minPhotos,
                    maxFollowers: maxFollowers,
                    minFollowers: minFollowers,
                    maxFollowing: maxFollowing,
                    minFollowing: minFollowing,
                    backgroundDMs: backgroundDMs,
                    StartComment: StartComment,
                    RankedTargets: RankedTargets,
                    recents: recents,
                    currentSpeed: currentSpeed,
                    storyUser: MediaTag1[0].username,
                    getStats: getStats,
                    LikedMedia: LikedMedia,
                    username: CurrentUser.username,
                    Whitelist: Whitelist,
                    StartUnfollow: StartUnfollow,
                    StartFollow: StartFollow,
                    StartLike: StartLike,
                    maxFollows: maxFollows,
                    FollowPoolSize: FollowedPool.length,
                    maxLikes: maxLikes,
                    LikePoolSize: likeCount,
                    UnfollowPoolSize: UnfollowedPool.length,
                    maxUnfollows: maxUnfollows,
                    likeError: likeError,
                    target: MediaTag1[0].target,
                  });
                break;
              }
            }
            console.log(d);
            0 == d &&
              chrome.tabs.create({
                url:
                  "https://www.instagram.com/stories/" + MediaTag1[0].username,
              });
          })
        : browser.tabs.query({ currentWindow: !0 }).then(logTabs, onError);
    }
  }
}
function logTabs(a) {
  for (var b = 0; b < a.length; b++) {
    var c = encodeURIComponent(a[b].url);
    encodeURIComponent(a[b].title);
    if (c.includes("instagram.com") && MediaTag1[0]) {
      chrome.tabs.update(a[b].id, {
        url: "https://www.instagram.com/stories/" + MediaTag1[0].username,
      });
      activeTab = b;
      --likeError;
      CurrentUser &&
        setTimeout(function () {
          CurrentUser &&
            (last_story = {
              StartReact: StartReact,
              reacts: reacts || [],
              CommentedMedia: CommentedMedia,
              maxComments: maxComments,
              CommentPool: CommentPool,
              unfollowInstoo: unfollow_mode,
              blacklist: blacklist,
              EnableFilters: EnableFilters,
              filters: filters,
              minPhotos: minPhotos,
              maxFollowers: maxFollowers,
              minFollowers: minFollowers,
              maxFollowing: maxFollowing,
              minFollowing: minFollowing,
              backgroundDMs: backgroundDMs,
              StartComment: StartComment,
              RankedTargets: RankedTargets,
              recents: recents,
              currentSpeed: currentSpeed,
              storyUser: MediaTag1[0].username,
              getStats: getStats,
              LikedMedia: LikedMedia,
              username: CurrentUser.username,
              Whitelist: Whitelist,
              StartUnfollow: StartUnfollow,
              StartFollow: StartFollow,
              StartLike: StartLike,
              maxFollows: maxFollows,
              FollowPoolSize: FollowedPool.length,
              maxLikes: maxLikes,
              LikePoolSize: likeCount,
              UnfollowPoolSize: UnfollowedPool.length,
              maxUnfollows: maxUnfollows,
              likeError: likeError,
            });
        }, 1e4);
      break;
    }
  }
}
function onError(a) {}
function UpdateLikeOrCommentMedia(a) {
  StartLike &&
    ((LikeOrCommentTime.Time -= a),
    0 > LikeOrCommentTime.Time &&
      0 < MediaPool.length &&
      LikedMedia.length < maxLikes &&
      ((a = getRandomInt(LikeSettings.TimeMin, LikeSettings.TimeMax)),
      (LikeOrCommentTime.Time = a),
      (LikeOrCommentTime.Max = a),
      (a = getRandomInt(8, 10)),
      getRandomInt(0, 10) > a &&
        ((a = getRandomInt(
          LikeSettings.ErrorTime,
          LikeSettings.ErrorTime + 100
        )),
        (LikeOrCommentTime.Time = a),
        (LikeOrCommentTime.Max = a),
        (LikeSettings.ErrorTime = getRandomInt(1800, 3600))),
      (a = getRandomInt(0, MediaPool.length - 1)),
      (a = MediaPool.splice(a, 1)),
      SendMessage("DoLikeMedia", "Media", a[0], ComPortContent)));
}
function UpdateFollow(a) {
  StartFollow &&
    ((FollowTime.Time -= a),
    0 > FollowTime.Time &&
      0 < UserPool.length &&
      FollowedPool.length < maxFollows &&
      ((a = getRandomInt(FollowSettings.TimeMin, FollowSettings.TimeMax)),
      (FollowTime.Time = a),
      (FollowTime.Max = a),
      (a = getRandomInt(8, 10)),
      getRandomInt(0, 10) > a &&
        ((a = getRandomInt(
          FollowSettings.ErrorTime,
          FollowSettings.ErrorTime + 100
        )),
        (FollowTime.Time = a),
        (FollowTime.Max = a),
        (FollowSettings.ErrorTime = getRandomInt(1800, 3600))),
      (a = getRandomInt(0, UserPool.length - 1)),
      FollowUser(UserPool[a])));
}
function UpdateTracking(a) {
  TrackingTime -= a;
  0 > TrackingTime &&
    ((a = String(new Date().getDate()).padStart(2, "0")),
    0 == Day
      ? (Day = last_day = a)
      : Day != a && (ResetPools(), ResetPools(), (Day = a)),
    (TrackingTime = 240));
}
function UpdateCollectAccount(a) {
  CollectAccountTime.Time -= a;
  0 > CollectAccountTime.Time &&
    0 < new_accounts.length &&
    5 > stories.length &&
    ((CollectAccountTime.Time = getRandomInt(120, 320)),
    (a = getRandomInt(0, new_accounts.length - 1)),
    (a = new_accounts.splice(a, 1)),
    SendMessage("CollectFromAccount", "account_name", a, ComPortContent));
}
function UpdateUnfollow(a) {
  StartUnfollow &&
    ((UnfollowTime.Time -= a),
    0 > UnfollowTime.Time &&
      0 < AllFollowings.length &&
      UnfollowedPool.length < maxUnfollows &&
      ((a = getRandomInt(UnfollowSettings.TimeMin, UnfollowSettings.TimeMax)),
      (UnfollowTime.Time = a),
      (UnfollowTime.Max = a),
      7 < getRandomInt(0, 10) &&
        ((a = getRandomInt(
          UnfollowSettings.ErrorTime,
          UnfollowSettings.ErrorTime + 100
        )),
        (UnfollowTime.Time = a),
        (UnfollowTime.Max = a),
        (UnfollowSettings.ErrorTime = getRandomInt(1800, 3600))),
      (a = getRandomInt(0, AllFollowings.length - 1)),
      UnfollowUser(AllFollowings[a])));
}
function CheckFollowPool(a) {
  CheckFollowTime.Time -= a;
  if (!(0 < CheckFollowTime.Time)) {
    CheckFollowTime.Time = CheckFollowPoolInterval;
    a = new Date().getTime();
    for (var b = FollowedPool.length - 1; 0 <= b; b--)
      if (
        Math.round(Math.abs((a - FollowedPool[b].followed_time) / 864e5)) >=
        UnfollowAfterDays
      ) {
        var c = FollowedPool[b];
        0 < c.length && AllFollowings.push(c[0]);
      }
  }
}
function UpdateCollectFollowers(a) {
  CollectFollowersTime.Time -= a;
  0 > CollectFollowersTime.Time &&
    loaded_cloud &&
    ((CollectFollowersTime.Time = getRandomInt(120, 600)),
    (a = self_job),
    "cursor_key" in a || (a = CurrentUser),
    (a.run_background = !0),
    SendMessage("GetTopFollowers", "user", a, ComPortContent));
}
function UpdateTwitter(a) {
  TwitterTime.Time -= a;
  (StartTwitterLike || StartTwitterFollow) &&
    0 < TagPoolTwitter.length &&
    0 > TwitterTime.Time &&
    ((TwitterTime.Time = getRandomInt(
      TwitterSettings.TimeMin,
      TwitterSettings.TimeMax
    )),
    round_robin_twitter++,
    (TwitterSettings.TimeMin = 200 * currentSpeedTwitter),
    (TwitterSettings.TimeMax = 250 * currentSpeedTwitter),
    chrome.tabs.query(
      { windowType: "normal", url: "https://twitter.com/*" },
      function (b) {
        b
          ? 0 == b.length
            ? chrome.tabs.create({
                url:
                  "https://twitter.com/search?q=" +
                  TagPoolTwitter[round_robin_twitter % TagPoolTwitter.length]
                    .tag_name +
                  "&src=typed_query",
              })
            : chrome.tabs.update(b[0].id, {
                url:
                  "https://twitter.com/search?q=" +
                  TagPoolTwitter[round_robin_twitter % TagPoolTwitter.length]
                    .tag_name +
                  "&src=typed_query",
              })
          : chrome.tabs.create({
              url:
                "https://twitter.com/search?q=" +
                TagPoolTwitter[round_robin_twitter % TagPoolTwitter.length] +
                "s&src=typed_query",
            });
      }
    ),
    (a = getRandomInt(0, TwitterTargets.length - 1)),
    0 <= a &&
      ((MediaTagTwitter = TwitterTargets.splice(a, 1)),
      "function" === typeof chrome.tabs.getAllInWindow
        ? chrome.tabs.query({ windowType: "normal" }, function (b) {
            for (var c = 0; c < b.length; c++) {
              var d = encodeURIComponent(b[c].url);
              encodeURIComponent(b[c].title);
              "undefined" != typeof d &&
                d.includes("twitter.com") &&
                setTimeout(function () {
                  SendMessage(
                    "LikeFollow",
                    "story",
                    {
                      StartReact: StartReact,
                      reacts: reacts || [],
                      CommentedMedia: CommentedMedia,
                      maxComments: maxComments,
                      CommentPool: CommentPool,
                      StartComment: StartComment,
                      StartTwitterLike: StartTwitterLike,
                      StartTwitterFollow: StartTwitterFollow,
                      MaxTwitterFollows: MaxTwitterFollows,
                      MaxTwitterLikes: MaxTwitterLikes,
                      FollowedPoolTwitterSize: FollowedPoolTwitter.length,
                      LikedMediaTwitterSize: LikedMediaTwitter.length,
                      TwitterPoolSize: TotalTwitter.length,
                      RankedTargets: RankedTargets,
                      recents: recents,
                      currentSpeed: currentSpeed,
                      storyUser: "",
                      getStats: getStats,
                      LikedMedia: LikedMedia,
                      username: "CurrentUser.username",
                      Whitelist: Whitelist,
                      StartUnfollow: StartUnfollow,
                      StartFollow: StartFollow,
                      StartLike: StartLike,
                      maxFollows: maxFollows,
                      FollowPoolSize: FollowedPool.length,
                      maxLikes: maxLikes,
                      LikePoolSize: likeCount,
                      UnfollowPoolSize: UnfollowedPool.length,
                      maxUnfollows: maxUnfollows,
                      likeError: likeError,
                    },
                    ComPortTwitter
                  );
                }, 5e3);
            }
          })
        : browser.tabs
            .query({ currentWindow: !0 })
            .then(logTabsTwitterAccount, onError)));
}
function UpdateTikTok(a) {
  TikTokTime.Time -= a;
  if (
    StartTikTok &&
    (0 < TagPool.length || 0 < TagPoolTikTok.length) &&
    0 > TikTokTime.Time
  ) {
    TikTokTime.Time = getRandomInt(
      TikTokSettings.TimeMin,
      TikTokSettings.TimeMax
    );
    TikTokSettings.TimeMin = 60 * currentSpeedTikTok;
    TikTokSettings.TimeMax = 70 * currentSpeedTikTok;
    chrome.tabs.query(
      { windowType: "normal", url: "https://www.tiktok.com/*" },
      function (c) {
        c
          ? 0 == c.length
            ? chrome.tabs.create({ url: "https://tiktok.com" })
            : chrome.tabs.reload(c[0].id)
          : chrome.tabs.create({ url: "https://tiktok.com" });
      }
    );
    for (var b = (a = 0); b < TikTokTargets.length; b++) a++;
    0 == a
      ? setTimeout(function () {
          "function" === typeof chrome.tabs.getAllInWindow
            ? chrome.tabs.query({ windowType: "normal" }, function (c) {
                for (var d = 0; d < c.length; d++) {
                  var f = encodeURIComponent(c[d].url);
                  encodeURIComponent(c[d].title);
                  if (f.includes("tiktok.com")) {
                    f = 0 == TagPoolTikTok.length ? TagPool : TagPoolTikTok;
                    var e = getRandomInt(0, f.length - 1);
                    0 <= e &&
                      (chrome.tabs.update(c[d].id, {
                        url: "https://www.tiktok.com/tag/" + f[e].tag_name,
                      }),
                      setTimeout(function () {
                        SendMessage(
                          "LikeFollow",
                          "story",
                          {
                            StartReact: StartReact,
                            reacts: reacts || [],
                            CommentedMedia: CommentedMedia,
                            maxComments: maxComments,
                            CommentPool: CommentPool,
                            StartComment: StartComment,
                            StartTikTokLike: StartTikTokLike,
                            StartTikTokFollow: StartTikTokFollow,
                            MaxTikTokFollows: MaxTikTokFollows,
                            MaxTikTokLikes: MaxTikTokLikes,
                            FollowedPoolTikTokSize: FollowedPoolTikTok.length,
                            LikedMediaTikTokSize: LikedMediaTikTok.length,
                            TikTokPoolSize: TotalTikToks.length,
                            maxTikToks: maxTikToks,
                            RankedTargets: RankedTargets,
                            recents: recents,
                            currentSpeed: currentSpeed,
                            storyUser: "",
                            getStats: getStats,
                            LikedMedia: LikedMedia,
                            username: "CurrentUser.username",
                            Whitelist: Whitelist,
                            StartUnfollow: StartUnfollow,
                            StartFollow: StartFollow,
                            StartLike: StartLike,
                            maxFollows: maxFollows,
                            FollowPoolSize: FollowedPool.length,
                            maxLikes: maxLikes,
                            LikePoolSize: likeCount,
                            UnfollowPoolSize: UnfollowedPool.length,
                            maxUnfollows: maxUnfollows,
                            likeError: likeError,
                          },
                          ComPortTikTok
                        );
                      }, 1e4));
                  }
                }
              })
            : browser.tabs
                .query({ currentWindow: !0 })
                .then(logTabsTikTok, onError);
        }, 5e3)
      : ((a = getRandomInt(0, TikTokTargets.length - 1)),
        0 <= a &&
          ((MediaTagTikTok = TikTokTargets.splice(a, 1)),
          "function" === typeof chrome.tabs.getAllInWindow
            ? chrome.tabs.query({ windowType: "normal" }, function (c) {
                for (var d = 0; d < c.length; d++) {
                  var f = encodeURIComponent(c[d].url);
                  encodeURIComponent(c[d].title);
                  f.includes("tiktok.com") &&
                    ((f = "https://tiktok.com/" + MediaTagTikTok[0]),
                    chrome.tabs.update(c[d].id, { url: f }),
                    TotalTikToks.push(f),
                    setTimeout(function () {
                      SendMessage(
                        "LikeFollow",
                        "story",
                        {
                          StartReact: StartReact,
                          reacts: reacts || [],
                          CommentedMedia: CommentedMedia,
                          maxComments: maxComments,
                          CommentPool: CommentPool,
                          StartComment: StartComment,
                          StartTikTokLike: StartTikTokLike,
                          StartTikTokFollow: StartTikTokFollow,
                          MaxTikTokFollows: MaxTikTokFollows,
                          MaxTikTokLikes: MaxTikTokLikes,
                          FollowedPoolTikTokSize: FollowedPoolTikTok.length,
                          LikedMediaTikTokSize: LikedMediaTikTok.length,
                          TikTokPoolSize: TotalTikToks.length,
                          maxTikToks: maxTikToks,
                          RankedTargets: RankedTargets,
                          recents: recents,
                          currentSpeed: currentSpeed,
                          storyUser: "",
                          getStats: getStats,
                          LikedMedia: LikedMedia,
                          username: "CurrentUser.username",
                          Whitelist: Whitelist,
                          StartUnfollow: StartUnfollow,
                          StartFollow: StartFollow,
                          StartLike: StartLike,
                          maxFollows: maxFollows,
                          FollowPoolSize: FollowedPool.length,
                          maxLikes: maxLikes,
                          LikePoolSize: likeCount,
                          UnfollowPoolSize: UnfollowedPool.length,
                          maxUnfollows: maxUnfollows,
                          likeError: likeError,
                        },
                        ComPortTikTok
                      );
                    }, 1e4));
                }
              })
            : browser.tabs
                .query({ currentWindow: !0 })
                .then(logTabsTikTokAccount, onError)));
  }
}
function Updatefacebook(a) {
  facebookTime.Time -= a;
  if (
    Startfacebook &&
    (0 < AccountPoolfacebook.length || 0 < TagPoolfacebook.length) &&
    0 > facebookTime.Time
  ) {
    facebookSettings.TimeMin = 240 * currentSpeedfacebook;
    facebookSettings.TimeMax = 500 * currentSpeedfacebook;
    facebookTime.Time = getRandomInt(
      facebookSettings.TimeMin,
      facebookSettings.TimeMax
    );
    chrome.tabs.query(
      { windowType: "normal", url: "https://www.facebook.com/*" },
      function (c) {
        c
          ? 0 == c.length
            ? chrome.tabs.create({ url: "https://facebook.com" })
            : chrome.tabs.reload(c[0].id)
          : chrome.tabs.create({ url: "https://facebook.com" });
      }
    );
    for (var b = (a = 0); b < facebookTargets.length; b++) a++;
    setTimeout(function () {
      "function" === typeof chrome.tabs.getAllInWindow
        ? chrome.tabs.query({ windowType: "normal" }, function (c) {
            for (var d = 0; d < c.length; d++) {
              var f = encodeURIComponent(c[d].url);
              encodeURIComponent(c[d].title);
              if (f.includes("facebook.com")) {
                f = [];
                0 < AccountPoolfacebook.length && f.push("accounts");
                0 < TagPoolfacebook.length && f.push("tags");
                f = f[round_robin_facebook % f.length];
                round_robin_facebook++;
                if ("tags" == f) {
                  var e = getRandomInt(0, TagPoolfacebook.length - 1);
                  var g = TagPoolfacebook[e];
                  g =
                    "https://www.facebook.com/groups/" +
                    g.tag_name +
                    "/members";
                }
                "accounts" == f &&
                  ((e = getRandomInt(0, AccountPoolfacebook.length - 1)),
                  (g = AccountPoolfacebook[e]),
                  (g = "https://www.facebook.com/" + g.tag_name + "/friends"));
                0 <= e &&
                  (chrome.tabs.update(c[d].id, { url: g }),
                  setTimeout(function () {
                    SendMessage(
                      "LikeFollow",
                      "story",
                      {
                        StartReact: StartReact,
                        reacts: reacts || [],
                        CommentedMedia: CommentedMedia,
                        maxComments: maxComments,
                        CommentPool: CommentPool,
                        StartComment: StartComment,
                        StartfacebookLike: StartfacebookLike,
                        StartfacebookFollow: StartfacebookFollow,
                        MaxfacebookFollows: MaxfacebookFollows,
                        MaxfacebookLikes: MaxfacebookLikes,
                        FollowedPoolfacebookSize: FollowedPoolfacebook.length,
                        LikedMediafacebookSize: LikedMediafacebook.length,
                        facebookPoolSize: Totalfacebooks.length,
                        maxfacebooks: maxfacebooks,
                        RankedTargets: RankedTargets,
                        recents: recents,
                        currentSpeed: currentSpeed,
                        storyUser: "",
                        getStats: getStats,
                        LikedMedia: LikedMedia,
                        username: "CurrentUser.username",
                        Whitelist: Whitelist,
                        StartUnfollow: StartUnfollow,
                        StartFollow: StartFollow,
                        StartLike: StartLike,
                        maxFollows: maxFollows,
                        FollowPoolSize: FollowedPool.length,
                        maxLikes: maxLikes,
                        LikePoolSize: likeCount,
                        UnfollowPoolSize: UnfollowedPool.length,
                        maxUnfollows: maxUnfollows,
                        likeError: likeError,
                      },
                      ComPortfacebook
                    );
                  }, 1e4));
              }
            }
          })
        : browser.tabs
            .query({ currentWindow: !0 })
            .then(logTabsfacebook, onError);
    }, 5e3);
  }
}
function UpdatePinterest(a) {
  PinterestTime.Time -= a;
  if (
    StartPinterest &&
    (0 < TagPool.length || 0 < TagPoolPinterest.length) &&
    0 > PinterestTime.Time
  ) {
    PinterestTime.Time = getRandomInt(
      PinterestSettings.TimeMin,
      PinterestSettings.TimeMax
    );
    PinterestSettings.TimeMin = 60 * currentSpeedPinterest;
    PinterestSettings.TimeMax = 70 * currentSpeedPinterest;
    chrome.tabs.query(
      { windowType: "normal", url: "https://*.pinterest.com/*" },
      function (c) {
        c
          ? 0 == c.length
            ? chrome.tabs.query(
                { windowType: "normal", url: "https://*.pinterest.co.uk/*" },
                function (d) {
                  d &&
                    (0 == d.length
                      ? chrome.tabs.create({ url: "https://pinterest.com" })
                      : chrome.tabs.reload(d[0].id));
                }
              )
            : chrome.tabs.reload(c[0].id)
          : chrome.tabs.create({ url: "https://pinterest.com" });
      }
    );
    for (var b = (a = 0); b < PinterestTargets.length; b++) a++;
    0 == a
      ? setTimeout(function () {
          "function" === typeof chrome.tabs.getAllInWindow
            ? chrome.tabs.query({ windowType: "normal" }, function (c) {
                for (var d = 0; d < c.length; d++) {
                  var f = encodeURIComponent(c[d].url);
                  encodeURIComponent(c[d].title);
                  if (f.includes("pinterest.co")) {
                    var e =
                      0 == TagPoolPinterest.length ? TagPool : TagPoolPinterest;
                    var g = getRandomInt(0, e.length - 1);
                    0 <= g &&
                      ((e = e[g]),
                      (g =
                        "https://www.pinterest.com/search/videos/?q=" +
                        e.tag_name),
                      f.includes("co.uk") &&
                        (g =
                          "https://www.pinterest.co.uk/search/videos/?q=" +
                          e.tag_name),
                      chrome.tabs.update(c[d].id, { url: g }));
                  }
                }
              })
            : browser.tabs
                .query({ currentWindow: !0 })
                .then(logTabsPinterest, onError);
        }, 5e3)
      : ((a = getRandomInt(0, PinterestTargets.length - 1)),
        0 <= a &&
          ((MediaTagPinterest = PinterestTargets.splice(a, 1)),
          "function" === typeof chrome.tabs.getAllInWindow
            ? chrome.tabs.query({ windowType: "normal" }, function (c) {
                for (var d = 0; d < c.length; d++) {
                  var f = encodeURIComponent(c[d].url);
                  encodeURIComponent(c[d].title);
                  f.includes("pinterest.co") &&
                    ((f = "https://pinterest.com/" + MediaTagPinterest[0]),
                    chrome.tabs.update(c[d].id, { url: f }),
                    TotalPinterests.push(f),
                    setTimeout(function () {
                      SendMessage(
                        "LikeFollow",
                        "story",
                        {
                          StartReact: StartReact,
                          reacts: reacts || [],
                          CommentedMedia: CommentedMedia,
                          maxComments: maxComments,
                          CommentPool: CommentPool,
                          StartComment: StartComment,
                          StartPinterestLike: StartPinterestLike,
                          StartPinterestFollow: StartPinterestFollow,
                          MaxPinterestFollows: MaxPinterestFollows,
                          MaxPinterestLikes: MaxPinterestLikes,
                          FollowedPoolPinterestSize:
                            FollowedPoolPinterest.length,
                          LikedMediaPinterestSize: LikedMediaPinterest.length,
                          PinterestPoolSize: TotalPinterests.length,
                          maxPinterests: maxPinterests,
                          RankedTargets: RankedTargets,
                          recents: recents,
                          currentSpeed: currentSpeed,
                          storyUser: "",
                          getStats: getStats,
                          LikedMedia: LikedMedia,
                          username: "CurrentUser.username",
                          Whitelist: Whitelist,
                          StartUnfollow: StartUnfollow,
                          StartFollow: StartFollow,
                          StartLike: StartLike,
                          maxFollows: maxFollows,
                          FollowPoolSize: FollowedPool.length,
                          maxLikes: maxLikes,
                          LikePoolSize: likeCount,
                          UnfollowPoolSize: UnfollowedPool.length,
                          maxUnfollows: maxUnfollows,
                          likeError: likeError,
                        },
                        ComPortPinterest
                      );
                    }, 1e4));
                }
              })
            : browser.tabs
                .query({ currentWindow: !0 })
                .then(logTabsPinterestAccount, onError)));
  }
}
function UpdateLinkedin(a) {
  LinkedinTime.Time -= a;
  (StartLinkedinLike || StartLinkedinFollow) &&
    (0 < TagPool.length || 0 < TagPoolLinkedin.length) &&
    0 > LinkedinTime.Time &&
    ((LinkedinTime.Time = getRandomInt(
      LinkedinSettings.TimeMin,
      LinkedinSettings.TimeMax
    )),
    (LinkedinSettings.TimeMin = 300 * currentSpeedLinkedin),
    (LinkedinSettings.TimeMax = 500 * currentSpeedLinkedin),
    chrome.tabs.query(
      { windowType: "normal", url: "https://www.linkedin.com/*" },
      function (b) {
        b
          ? 0 == b.length
            ? chrome.tabs.create({ url: "https://linkedin.com" })
            : chrome.tabs.reload(b[0].id)
          : chrome.tabs.create({ url: "https://linkedin.com" });
      }
    ),
    setTimeout(function () {
      var b = round_robin_linkedin % TagPoolLinkedin.length;
      round_robin_linkedin++;
      0 <= b &&
        ((MediaTagLinkedin = TagPoolLinkedin[b]),
        "function" === typeof chrome.tabs.getAllInWindow
          ? chrome.tabs.query({ windowType: "normal" }, function (c) {
              for (var d = 0; d < c.length; d++) {
                var f = encodeURIComponent(c[d].url);
                encodeURIComponent(c[d].title);
                f.includes("linkedin.com") &&
                  ((f =
                    "https://www.linkedin.com/search/results/people/?keywords=" +
                    MediaTagLinkedin.tag_name.split(" ").join("%20") +
                    "&origin=SWITCH_SEARCH_VERTICAL"),
                  chrome.tabs.update(c[d].id, { url: f }),
                  TotalLinkedins.push(f),
                  setTimeout(function () {
                    SendMessage(
                      "LikeFollow",
                      "story",
                      {
                        StartLinkedinLike: StartLinkedinLike,
                        StartLinkedinFollow: StartLinkedinFollow,
                        MaxLinkedinFollows: MaxLinkedinFollows,
                        MaxLinkedinLikes: MaxLinkedinLikes,
                        target: MediaTagLinkedin.tag_name
                          .split(" ")
                          .join("%20"),
                      },
                      ComPortLinkedin
                    );
                  }, 1e4));
              }
            })
          : browser.tabs
              .query({ currentWindow: !0 })
              .then(logTabsLinkedinAccount, onError));
    }, 5e3));
}
function UpdateTinder(a) {
  TinderTime.Time -= a;
  StartTinder &&
    (0 < TagPool.length || 0 < TagPoolTinder.length) &&
    0 > TinderTime.Time &&
    ((TinderTime.Time = getRandomInt(
      TinderSettings.TimeMin,
      TinderSettings.TimeMax
    )),
    (TinderSettings.TimeMin = 60 * currentSpeedTinder),
    (TinderSettings.TimeMax = 125 * currentSpeedTinder),
    chrome.tabs.query(
      { windowType: "normal", url: "https://tinder.com/*" },
      function (b) {
        b
          ? 0 == b.length && chrome.tabs.create({ url: "https://tinder.com" })
          : chrome.tabs.create({ url: "https://tinder.com" });
      }
    ),
    (a = getRandomInt(0, TinderTargets.length - 1)),
    0 <= a &&
      ((MediaTagTinder = TinderTargets.splice(a, 1)),
      "function" === typeof chrome.tabs.getAllInWindow &&
        setTimeout(function () {
          SendMessage(
            "LikeFollow",
            "story",
            {
              StartReact: StartReact,
              reacts: reacts || [],
              CommentedMedia: CommentedMedia,
              maxComments: maxComments,
              CommentPool: CommentPool,
              StartComment: StartComment,
              StartTinderLike: StartTinderLike,
              StartTinderComment: StartTinderComment,
              MaxTinderLikes: MaxTinderLikes,
              MaxTinderComments: MaxTinderComments,
              FollowedPoolTinderSize: FollowedPoolTinder.length,
              LikedMediaTinderSize: LikedMediaTinder.length,
              RankedTargets: RankedTargets,
              recents: recents,
              currentSpeed: currentSpeed,
              storyUser: "",
              getStats: getStats,
              LikedMedia: LikedMedia,
              username: "CurrentUser.username",
              Whitelist: Whitelist,
              StartUnfollow: StartUnfollow,
              StartFollow: StartFollow,
              StartLike: StartLike,
              maxFollows: maxFollows,
              FollowPoolSize: FollowedPool.length,
              maxLikes: maxLikes,
              LikePoolSize: likeCount,
              UnfollowPoolSize: UnfollowedPool.length,
              maxUnfollows: maxUnfollows,
              likeError: likeError,
            },
            ComPortTinder
          );
        }, 5e3)));
}
function UpdateLoop() {
  if (IsUserLoggedIn) {
    var a = new Date().getTime() / 1e3,
      b = a - LastUpdateTime;
    LastUpdateTime = a;
    UpdateStatus(b);
    UpdateStory(b);
    UpdateTikTok(b);
    UpdateTinder(b);
    UpdateLinkedin(b);
    UpdateTwitter(b);
    UpdatePinterest(b);
    Updatefacebook(b);
  }
}
