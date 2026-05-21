// 1. OpenAIのAPIを叩くための設定（城の鍵を開けるイメージね！）
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "YOUR_OPENAI_API_KEY"; // ※ここにこいちゃんのAPIキーを入れるわよ！

// 2. AIを呼び出すための無敵の関数（これを実行するだけでAIが喋るわ！）
async function askAI(userMessage) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // コスト最安・超高速の2026年標準モデルよ！
                messages: [
                    { role: "system", content: "あなたは長野県の製造業の痛みがわかる、最高に優秀なWEBコンサルタントです。" },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        console.log("AIからの返答：", aiResponse);
        return aiResponse;

    } catch (error) {
        console.error("バグ発生：", error);
    }
}

// 3. テスト実行（関数を呼び出してみるわよ！）
askAI("材料高騰で困っている工場の社長に、一言アドバイスを頂戴！");