import { writable } from "svelte/store";

export const users = writable([
    {
      id: 1,
      name: "K2",
      image: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
      email: "K2@gmail.com",
      sex: "male"
      ,active: "active",
    },
    {
      id: 2,
      name: "K3",
      image: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
      email: "K3@gmail.com",
      sex: "male"
      ,active: "active",
    },
    {
      id: 3,
      name: "K4",
      image: "https://cdn-icons-png.flaticon.com/512/1785/1785896.png",
      email: "K4@gmail.com",
      sex: "female"
      ,active: "active",
    },
    {
      id: 4,
      name: "K3M",
      image: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
      email: "K3@gmail.com",
      sex: "male"
      ,active: "active",
    },
    {
      id: 5,
      name: "K4M",
      image: "https://cdn-icons-png.flaticon.com/512/1785/1785896.png",
      email: "K3@gmail.com",
      sex: "female"
      ,active: "inactive",
    },
    {
      id: 6,
      name: "K5M",
      image: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
      email: "K3@gmail.com",
      sex: "male"
      ,active: "inactive",
    },
  ])
