import { SEND_EMAIL } from "../utlis/API_URL";

export const sendMailUs = async (body) => {
  const response = await fetch(SEND_EMAIL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

export const saveContactUs = async (body) => {
  const response = await fetch(
    "https://talzie-4e5a1-default-rtdb.firebaseio.com//userDataRecords.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
    console.log(response);
  return response;
};
