# Pin+
# Version 2.8 

[下载链接](http://t.cn/Ai0mHgaa)

## 更更新日志

#### 2019-10-8

- 跟进适配 iOS 13，界面更新，支持深色模式

- 修复分享扩展

- 新增花式字体、自定义预览动作等

- 由于新浪不再对外提供短网址服务，替换为 tinyurl 短网址

- 修复分词时大段文字无法滚动的 BUG

- 修复 iOS 13 切换应用商店功能

- 汇率查询修复不显示欧元的 BUG

- 由于 iOS 13 无法在通知中心正常使用键盘，编码解码、汇率查询功能模块提供了通知中心专用的小键盘

- 目前移除的功能：详细编辑文本、键盘工具栏、生成桌面快捷方式（iOS 13 下失效）

- 原详细编辑文本功能替换为预览文本，预览视图下，长按即可显示二维码，长按二维码即可保存到相册。

- 重写收集剪贴板文本的逻辑，其它细节更新，BUG 修复。

#### 已知问题

- 包括 2.7 以下的版本，更新时需手动备份本地剪贴板内容，但是从下次更新时就不同特意去备份

- 由于 APP 对键盘组件的支持不佳，暂时放弃适配键盘模块，但会随着 APP 更新跟进支持

- 由于 APP 未完整适配深色模式，目前存在以下问题：
> 1. `UITextfield` 的 `placeholder` 在深色模式下显示效果不佳
> 2. `TabView`、`StepperView` 深色模式显示不佳，无法正常更改 `TintColor`
> 3. 替换了 `Input` 控件的 `$Input` 方法，无法与控件的事件相对应，有时会造成脚本崩溃
> 4. 无法设置为默认键盘脚本，键盘模式下，对于深色模式的变化无法及时反应


## 更早的更新日志

#### 2019-7-3

本次更新处理了一批细节问题，并引入了新的汇率查询 API 以满足更多更及时的需求。

##### 汇率查询接口说明

进入 `scripts/plugins/exchange-rate.js`

第一行引号内为空或不合法时，使用无需注册的免费 API，数据以 EUROPEAN CENTRAL BANK 每个工作日 CET 时间 16:00 公布的数据为准；

若需要更多、更及时的数据，请前往 https://fixer.io/product 根据个人需求注册并将 Access Key 填入第一行引号内即可使用。免费套餐拥有 1000 次/月的配额，可查询包括比特币、新台币、盎司金等 168 种货币汇率，每小时更新。

#### 2019-6-14

现在已支持作为键盘组件使用。

下方为简单的使用说明，和通知中心组件略有差别。

[点击查看使用说明示意图](http://tva1.sinaimg.cn/large/007X8olVly1g7r0sxsquuj30u010ral7.jpg?_blank)

#### 2019-5-30

引入 toast 动效，感谢 AbleCats。

添加记录统计。

BUG 修复和其他调整。

#### 2019-5-24

整合10010资费查询。

更多 [**更新日志**](http://t.cn/EL6MhNS)
