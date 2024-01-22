const baseUrl = 'https://d208znpz6acgp4.cloudfront.net/images/';

const imgItems: { [key: string]: string } = {
  Pen: 'pen.svg',

  star: 'star.svg',
  Save: 'save.svg',
  Oops: 'oops.svg',

  YWcoin: 'yw$.svg',
  GYWcoin: 'gyw$.svg',
  KeyImg: 'key.svg',
  СupImg: 'cup.svg',

  Trash: 'trash.svg',
  queue: 'queue.svg',

  vsImg: 'vsImg.webp',
  wifiImg: 'wifi.svg',
  HandImg: 'hand.svg',

  Search: 'search.svg',
  Bucket: 'bucket.svg',
  NavCup: 'navCup.svg',
  Reload: 'reload.svg',
  csLogo: 'cslogo.svg',

  banned: 'banned.webp',
  Filter: 'filters.svg',
  report2: 'report2.svg',
  SteamImg: 'steam.svg',
  ClockImg: 'clock.svg',
  LogoImage: 'logo.svg',
  PairImage: 'pair.svg',

  report1: 'report1.svg',
  report3: 'report3.svg',
  Copying: 'copying.svg',
  NavUser: 'navUser.svg',

  ProfilePurple: 'profile_purple.svg',
  SupportPurple: 'support_purple.svg',

  AddItem: 'addItem.svg',
  BuyItem: 'buyItem.svg',
  techServe: 'tech.webp',

  redFlag: 'red_flag.svg',
  blocked: 'blocked.webp',

  MapNuke: 'map_nuke.webp',
  Exchange: 'exchange.svg',
  TimeBomb: 'timeBomb.svg',
  InfoIcon: 'infoIcon.svg',
  Approved: 'approved.svg',
  Step1Image: 'step1.webp',
  Step2Image: 'step2.webp',
  Step3Image: 'step3.webp',
  Step4Image: 'step4.webp',
  Step5Image: 'step5.webp',

  CasesImage: 'cases.webp',
  LockFindGame: 'lock.svg',
  SafetyImage: 'safety.svg',
  MapTrain: 'map_train.webp',
  csGoLogo: 'csgo_logo.webp',
  blueArrow: 'blueArrow.svg',
  TrashGrey: 'trashGrey.svg',
  NavLogout: 'navLogout.svg',
  LogoutPurple: 'logout_purple.svg',

  CookiesImage: 'cookie.svg',
  FindGameCoins: 'coins.svg',
  BackgroundImage: 'bg.webp',

  gpb1x1aim: 'gpb1x1aim.webp',
  zoomImage: 'zoom_image.svg',
  gameTimer: 'game_timer.svg',
  DiamondImage: 'diamond.svg',

  NavMarket: 'marketplace.svg',
  MarketPurple: 'market_purple.svg',

  itemLocked: 'itemLocked.svg',
  warningRed: 'warningRed.svg',
  errorCross: 'errorCross.svg',
  RemoveItem: 'removeItem.svg',
  infoIconGr: 'infoIconGr.svg',
  roundStarG: 'roundStarG.svg',
  roundStarY: 'roundStarY.svg',
  Step1ImageEn: 'step1en.webp',
  Step2ImageEn: 'step2en.webp',
  Step5ImageEn: 'step5en.webp',

  RightArrow: 'right-arrow.svg',
  closeBlack: 'close_black.svg',
  LeadersRank: 'gold-nova.webp',
  CalendarImage: 'calendar.svg',

  MapVertigo: 'map_vertigo.webp',
  MapInferno: 'map_inferno.webp',
  SuccessItem: 'successItem.svg',

  searchBg5x5: '5x5searchBg.webp',
  aimSearchBg: 'aimSearchBg.webp',
  LeaderCoins: 'yw$_multiple.svg',
  HistoryImg2: 'yw$_multiple.svg',
  ProgressItem: 'iconProcess.svg',
  WhiteSteamImg: 'whiteSteam.svg',

  calibrateBg: 'calibrate_bg.webp',
  MapOverpass: 'map_overpass.webp',
  csGoCounter: 'csgo_counter.webp',
  PromoSuccess: 'promoSuccess.svg',
  SuccessCheck: 'successCheck.svg',

  PositiveVote: 'positiveVote.svg',
  NegativeVote: 'negativeVote.svg',

  TournamentPrize3: 'prize3d.webp',
  itemUnLocked: 'itemUnlocked.webp',
  TournamentPrize1: 'prize1st.webp',
  TournamentPrize2: 'prize2nd.webp',

  MapShortDust: 'map_shortdust.webp',
  ApprovedGreen: 'approvedGreen.svg',
  checkInCircle: 'checkInCircle.svg',
  report1Active: 'report1_active.svg',
  BackgroundMainImage: 'bgmain.webp',

  HistoryImg1: 'tourn_table_grid.svg',
  gpb1x1wingman: 'gpb1x1wingman.webp',
  report2Active: 'report2_active.svg',
  report3Active: 'report3_active.svg',

  csGoTerrorist: 'csgo_terrorist.webp',
  instructionOne: 'instruction_1.webp',
  instructionTwo: 'instruction_2.webp',
  BackgroundThirdImage: 'bgthird.webp',

  LogoBlueBorder: 'logoBlueBorder.webp',
  yellowDownload: 'yellow_download.svg',

  BackgroundSecondImage: 'bgsecond.webp',

  wingmanSearchBg: 'wingmanSearchBg.webp',
  BackgroundFifthImage: 'leaders_bg.webp',

  BackgroundFourthImage: 'tournamentGag.webp',

  wingmanSearchBg2x2: '2x2wingmanSearchBg.webp',

  rank0: 'rank_0.svg',
  rank1: 'rank_1.svg',
  rank2: 'rank_2.svg',
  rank3: 'rank_3.svg',
  rank4: 'rank_4.svg',
  rank5: 'rank_5.svg',
  rank6: 'rank_6.svg',
  rank7: 'rank_7.svg',
  rank8: 'rank_8.svg',
  rank9: 'rank_9.svg',
  rank10: 'rank_10.svg',
  calibrationRank: 'levelUnknown.svg',

  leader1: 'leader1.svg',
  leader2: 'leader2.svg',
  leader3: 'leader3.svg',

  level1: 'level_1_4.svg',
  yw$Coin: 'yw$_coin.svg',
  gyw$Coin: 'gyw$_coin.svg',
  bgLeague: 'bgLeague.webp',

  rankUnknown: 'rank_unknown.svg',

  howStep1ru: 'how_step_1_ru.webp',
  howStep2ru: 'how_step_2_ru.webp',
  howStep3ru: 'how_step_3_ru.webp',
  howStep4ru: 'how_step_4_ru.webp',
  howStep5ru: 'how_step_5_ru.webp',

  discordWhite: 'discord_white.svg',
  rankImmortal: 'rank_immortal.svg',
  discordPurple: 'discord_purple.svg',
  leagueSeason1: 'league_season_1.svg',
  rankTopImmortal: 'rank_top_immortal.svg',
  operationPending: 'operation_pending.svg',
  operationPendingWithCircle: 'operation_pending_with_circle.svg',
  tCtSide: 't_ct_side.webp',
  newTimer: 'timer_new.svg',

  awpModeBg: 'awp_mode_bg.webp',
  pistolModeBg: 'pistol_mode_bg.webp',
  infoTooltip: 'info_tooltip.svg',

  showLessArrow: 'show_less_arrow.svg',
  brokenGlovesAlert: 'broken_gloves_alert.webp',
  brokenGlovesAlertBg: 'broken_gloves_alert_bg.webp',

  checkCircleGreen: 'check_circle_green.svg',
  checkCirclePurple: 'check_circle_purple.svg',
  crossCircle: 'cross_circle.svg',
  diamondVip: 'diamond_vip.svg',
  vipFull: "vip_full.svg",

  visa: 'visa.webp',
  masterCard: 'mastercard.webp',
  qiwi: 'qiwi.webp',
  yoomoney: 'yoomoney.webp',
  bronzeKey: 'bronze_key.svg',
  goldKey: 'gold_key.svg',
  silverKey: 'silver_key.svg',

  bullets: 'bullets.svg',
  dropbox: 'dropbox.webp',
  randomClassified: 'random_classified.webp',
  randomConsumer: 'random_consumer.webp',
  randomCovert: 'random_covert.webp',
  randomIndustrial: 'random_industrial.webp',
  randomMilspec: 'random_milspec.webp',
  randomRestricted: 'random_restricted.webp',
  gyws_pack: 'gyws_pack.webp',
  csCircle: 'cs-circle.svg',

  box_question: 'box_question.svg',
  keys_arrow: 'keys_arrow.svg',
  yws_pack: 'yws_pack.webp',
  dropboxGray: 'dropbox_gray.webp',
  tournament_ticket: 'tournament_ticket.webp',

  dropbox_violet: 'dropbox_violet.webp',
  lock_gray: 'lock_gray.svg',
  target_purple: 'target_purple.svg',
  vipkey_gray: 'vipkey_gray.webp',
  vipkey_active: 'vipkey_active.webp',

  landingBanner1: 'landing_banner_1.webp',
  landingBanner2: 'landing_banner_2.webp',
  landingBanner3: 'landing_banner_3.webp',
  landingBanner4: 'landing_banner_4.webp',
  landingBanner5: 'landing_banner_5.webp',
  landingPicture: 'landing_picture.webp',

  landingBgMobile: 'landing_bg_mobile.webp',

  navGames: 'nav_games.svg',
  navGamesInactive: 'nav_games_inactive.svg',

  navDropbox: 'nav_dropbox.webp',
  navDropboxInactive: 'nav_dropboxes_inactive.webp',

  navTournaments: 'nav_tournaments.svg',
  navTournamentsInactive: 'nav_tournaments_inactive.svg',

  navRatings: 'nav_ratings.svg',
  navRatingsInactive: 'nav_ratings_inactive.svg',

  navGiveaways: 'nav_giveaways.svg',
  navGiveawaysInactive: 'nav_giveaways_inactive.svg',

  boostDepEvent: 'boost_dep_event.webp',
  keyDepEvent: 'key_dep_event.webp',

  flagRu: 'flag_ru.svg',
  flagUa: 'flag_ua.svg',
  flagUs: 'flag_us.svg',

  tgNav: 'tg_nav.svg',
  ttNav: 'tt_nav.svg',
  instNav: 'inst_nav.svg',
  logoutNav: 'logout_nav.svg',
  discordNav: 'discord_nav.svg',
  giveawayIcon: 'giveaway_icon.svg',

  itemsNav: 'items_nav.svg',
  itemsNavActive: 'items_nav_active.svg',
  playNav: 'play_nav.svg',
  playNavActive: 'play_nav_active.svg',
  ratingsNav: 'ratings_nav.svg',
  ratingsNavActive: 'ratings_nav_active.svg',
  vipNav: 'vip_nav.svg',
  vipNavActive: 'vip_nav_active.svg',
  refsNav: 'refs_nav.svg',
  refsNavActive: 'refs_nav_active.svg',
  shopNav: 'shop_nav.svg',
  shopNavActive: 'shop_nav_active.svg',
  tasksNav: 'tasks_nav.svg',
  tasksNavActive: 'tasks_nav_active.svg',
  tournamentNav: 'tournament_nav.svg',
  tournamentNavActive: 'tournament_nav_active.svg',

  winCelebration: 'win_celebration.webp',
  neonGift:"neon_gift.svg"
};

type ImgItemKey = keyof typeof imgItems;

export const getImgUrl = (item: ImgItemKey) => baseUrl + imgItems[item];
