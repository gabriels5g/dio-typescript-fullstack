const num: number = 16;

if (num > 15) {
  console.log("maior que 15");
} else {
  console.log("menor ou igual a 15");
}

function validateUse(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
}

const typeUser = {
  admin: "Seja bem vindo admin",
  student: "vc é um estudante",
  viewer: "você pode vizualizar",
};
const usuario = "student";

validateUse(usuario);
