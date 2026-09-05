/*
 * SNS・外部サービスのリンク設定
 *
 * URLが決まるまでは status を "preparing"、url を空文字のままにします。
 * 公開するときは url を設定し、status を "ready" に変更します。
 * URLは、このファイルだけで管理します。
 */
window.CHII_LAB_SITE_LINKS = Object.freeze({
  updatedAt: "2026-09-05",
  homepage: {
    name: "先生のちいさなアプリ実験室",
    status: "preparing",
    url: ""
  },
  services: [
    {
      id: "github",
      name: "GitHub",
      account: "chiilabo-lab",
      accountStatus: "利用者が変更済み・接続確認済み",
      repository: "未確定",
      iconText: "GH",
      visible: false,
      status: "ready",
      url: "https://github.com/chiilabo-lab"
    },
    {
      id: "instagram",
      name: "Instagram",
      account: "@chiilabo.lab",
      displayName: "ちいラボ先生🐼 先生のちいさなアプリ実験室",
      profileText: [
        "🐼 ちいラボ先生です。",
        "教室から、ひとつずつ。",
        "教室で試したことや、",
        "職員室の声から、",
        "先生の毎日に役立つ",
        "アプリ・教材・実践を",
        "「ちいさく」試し、",
        "育てています🌱",
        "🏠ホームページ準備中"
      ].join("\n"),
      iconText: "IG",
      status: "ready",
      url: "https://www.instagram.com/chiilabo.lab/"
    },
    {
      id: "youtube",
      name: "YouTube",
      account: "@ちいラボ先生_先生のアプリ",
      displayName: "ちいラボ先生🐼 先生のちいさなアプリ実験室",
      channelStatus: "チャンネル作成済み・正式ハンドル利用者確認済み",
      iconText: "YT",
      status: "ready",
      url: "https://www.youtube.com/@ちいラボ先生_先生のアプリ"
    },
    {
      id: "email",
      name: "メール",
      account: "お問い合わせ用",
      displayName: "お問い合わせ用メール",
      visibility: "メールアドレスは内部のブランドガイドで管理",
      iconText: "✉",
      status: "preparing",
      url: ""
    }
  ]
});
