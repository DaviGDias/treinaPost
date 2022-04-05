import PostBody from "../../components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody
        post={{
            id: '',
          title: "Aprendendo TypeScript",
          description: "",
          picture:
            "https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/10/tipagem-no-typescript-400x280.png",
          slug: "",
          content: (
            <>
              <p>
                O Spring Data JPA é uma framework que faz parte do conjunto de
                projetos do Spring Data que tem como finalidade tornar a
                integração de aplicações Spring com a JPA (Java Persistence
                API), uma de suas principais vantagens é a capacidade que o
                mesmo possui para criar a camada de acesso aos dados sem a
                necessidade de termos que implementar manualmente as famosas
                classes de DAO (Data Access Object).
              </p>
              <p>
                Assim como o projeto Spring Data possui interfaces que são
                utilizadas ao longo de todos os seus subprojetos, o Spring Data
                JPA também possui sua principal interface que geralmente iremos
                utilizar durante a criação da camada de persistência da nossa
                aplicação, essa interface é a.
              </p>
              <h3>Helooow</h3>
              <p>
                Veja no diagrama abaixo quais os métodos definidos pela
                interface <code>JpaRepository</code> e como ela se relaciona com
                as interfaces do Spring Data:
              </p>

              <p>
                O Spring Data JPA é uma framework que faz parte do conjunto de
                projetos do Spring Data que tem como finalidade tornar a
                integração de aplicações Spring com a JPA (Java Persistence
                API), uma de suas principais vantagens é a capacidade que o
                mesmo possui para criar a camada de acesso aos dados sem a
                necessidade de termos que implementar manualmente as famosas
                classes de DAO (Data Access Object).
              </p>
              <p>
                Assim como o projeto Spring Data possui interfaces que são
                utilizadas ao longo de todos os seus subprojetos, o Spring Data
                JPA também possui sua principal interface que geralmente iremos
                utilizar durante a criação da camada de persistência da nossa
                aplicação, essa interface é a.
              </p>
              <h3>Helooow</h3>
              <p>
                Veja no diagrama abaixo quais os métodos definidos pela
                interface <code>JpaRepository</code> e como ela se relaciona com
                as interfaces do Spring Data:
              </p>
            </>
          ),
        }}
      />
    </>
  );
}
