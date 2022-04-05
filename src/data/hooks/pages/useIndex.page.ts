import { BlogPost } from "../../@types/BologoPostInterface";

export default function useIndex(){
    const posts: BlogPost[] = [
        {
            id: '1',
            title: ' Iniciando com Spring Data JPA ',
            slug: 'backend',
            description: 'Neste artigo iremos conhecer o Spring Data JPA, entender o seu funcionamento e como o mesmo pode nos... ',
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/01/iniciando-com-spring-data-jpa-400x280.png',
        },

        {
            id: '2',
            title: ' Modificadores de acesso no TypeScript ',
            slug: 'frontend',
            description: 'Nester artigo vamos aprender a utilizar os modificadores de acesso das propriedades de uma classe no... ',
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/10/tipagem-no-typescript-400x280.png',
        }
    ];

    return {
        posts,
    }
}