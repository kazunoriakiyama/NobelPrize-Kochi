export async function onRequest(context) {
  const { request, next } = context;

  // ★ここで「ID」と「パスワード」を決めてください★
  const USERNAME = "kochi39";        // 好きなユーザー名
  const PASSWORD = "nobel202639";    // 好きなパスワード

  const authHeader = request.headers.get("Authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic") {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === USERNAME && pass === PASSWORD) {
        return await next();
      }
    }
  }

  return new Response("認証が必要です", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
