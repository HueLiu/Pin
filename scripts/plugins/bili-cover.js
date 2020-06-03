exports.run = str => {
  const ui = require("../ui");
  const regex = [
    /https?:\/\/live\.bilibili\.com\/(\d+)/i,
    /https?:\/\/live\.bilibili\.com\/.*?\/(\d+)/i,
    /https?:\/\/(?:m|www)\.bilibili\.com\/[a-zA-Z0-9]+?\/(av(\d+)|(BV\w+))/i,
    /https?:\/\/(?:b23|acg)\.tv\/(av(\d+)|(BV\w+))?/i,
    /^(av)?(\d{1,8})$/i,
    /^(BV)\w+$/i
  ];

  let matched,
    i = 0;
  while (!(matched = str.match(regex[i]))) i++;

  function getCover(id, key = undefined) {
    const prefix = key
      ? `https://api.bilibili.com/x/web-interface/view?${key}=`
      : "https://api.live.bilibili.com/room/v1/RoomStatic/get_room_static_info?room_id=";
    $http.get({
      url: `${prefix}${id}`,
      handler: async resp => {
        try {
          let info = resp.data.data;
          let url = key ? info.pic : info.user_cover;
          let { data } = await $http.download(url);
          if (!data) throw true;
          $photo.save({
            data: data,
            handler: success => {
              if (success) ui.toast({ text: "封面保存成功" });
              else throw true;
            }
          });
        } catch (e) {
          ui.toast({ text: "封面保存失败", icon: "225" });
        }
      }
    });
  }

  switch (i) {
    case 0:
    case 1:
      getCover(matched[1]);
      break;
    case 2:
    case 3:
      if (matched[2]) getCover(matched[2], "aid");
      else if (matched[3]) getCover(matched[3], "bvid");
      else if (i === 3) {
        $http.get(str).then(resp => {
          matched = resp.response.url.match(regex[2]);
          getCover(matched[3], "bvid");
        });
      }
      break;
    case 4:
      if (matched[1]) getCover(matched[2], "aid");
      else
        $ui.menu({
          items: ["视频", "直播"],
          handler: (_, idx) => {
            getCover(matched[2], i === 0 ? "aid" : undefined);
          }
        });
      break;
    case 5:
      getCover(matched[0], "bvid");
      break;
    default:
      ui.toast({ text: "URL 或者内容输入有误", icon: "225" });
  }
};