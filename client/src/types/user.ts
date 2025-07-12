export type User ={
    id: String;
    displayName:String;
    email:String;
    token:String;
    imageUrl?:String;
}

export type LoginCreds={
    email:String;
    password:String;
}

export type RegisterCreds={
     email:String;
     displayName:String;
    password:String;
}