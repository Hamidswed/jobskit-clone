import http from "./httpService";

export async function loginApi({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}) {
  return http
    .post("/user/login", { identifier, password })
    .then(({ data }) => data);
}

export async function getUserApi(){
  return http.get("/user/whoami").then(({data})=>data)
}

