let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

sendAnalytics("Some data");
