const Mock = {
  size: 5,
  totalPages: 2,
  totalElements: 8,
  content: [
    {
      id: 1,
      title: "Carrossel de imagens",
      type: "TEXT",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet?',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 10,
      media: [{
        id: 1,
        url: "https://picsum.photos/300/300?random=1"
      },
      {
        id: 2,
        url: "https://picsum.photos/300/300?random=2"
      },
      {
        id: 3,
        url: "https://picsum.photos/300/300?random=3"
      }],
      pollTopics: [{
        id: 1,
        description: "Opção 01",
        votes: 10,
        hasVote: false
      },
      {
        id: 2,
        description: "Opção 02",
        votes: 20,
        hasVote: false
      },
      {
        id: 3,
        description: "Opção 03",
        votes: 15,
        hasVote: false
      }]
    },
    {
      id: 2,
      title: "Qual a melhor data para o próximo curso?",
      type: "SURVEY",
      description: 'Olá a todos! Estamos contentes em avisar que pretendemos em breve abrir inscrições para a nova turma do nosso curso. Para tal, queremos saber de vocês qual das opções de datas para início do curso atenderia melhor. Responde aí!',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 0,
      media: [],
      pollTopics: [{
        id: 1,
        description: "01/08/2022 - Segunda-feira",
        votes: 10,
        hasVote: false
      },
      {
        id: 2,
        description: "02/08/2022 - Terça-feira",
        votes: 20,
        hasVote: false
      },
      {
        id: 3,
        description: "03/08/2022 - Quarta-feira",
        votes: 110,
        hasVote: false
      },
      {
        id: 4,
        description: "04/08/2022 - Quinta-feira",
        votes: 2,
        hasVote: false
      }]
    },
    {
      id: 3,
      title: "Somente 01 imagem",
      type: "TEXT",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet?',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 55,
      media: [{
        id: 1,
        url: "https://picsum.photos/300/300?random=1"
      }],
      pollTopics: []
    },
    {
      id: 4,
      title: "Somente texto",
      type: "TEXT",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet?',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 2,
      media: [],
      pollTopics: []
    },
    {
      id: 5,
      title: "Várias imagens",
      type: "TEXT",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 3150,
      media: [{
        id: 1,
        url: "https://picsum.photos/300/300?random=10"
      },
      {
        id: 2,
        url: "https://picsum.photos/300/300?random=11"
      },
      {
        id: 3,
        url: "https://picsum.photos/300/300?random=12"
      },
      {
        id: 4,
        url: "https://picsum.photos/300/300?random=13"
      },
      {
        id: 5,
        url: "https://picsum.photos/300/300?random=14"
      },
      {
        id: 6,
        url: "https://picsum.photos/300/300?random=15"
      },
      {
        id: 7,
        url: "https://picsum.photos/300/300?random=16"
      }],
      pollTopics: []
    },
    {
      id: 6,
      title: "Imagem sem comentários",
      type: "TEXT",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet?',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 0,
      media: [{
        id: 1,
        url: "https://picsum.photos/300/300?random=10"
      }],
      pollTopics: []
    },
    {
      id: 7,
      title: "Enquete futebolística!",
      type: "SURVEY",
      description: 'Qual o melhor de todos os tempos?',
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 0,
      media: [],
      pollTopics: [{
        id: 1,
        description: "Cristiano Ronaldo",
        votes: 10,
        hasVote: false
      },
      {
        id: 2,
        description: "Messi",
        votes: 20,
        hasVote: false
      },
      {
        id: 3,
        description: "Pelé",
        votes: 110,
        hasVote: false
      },
      {
        id: 4,
        description: "Tulio Maravilha",
        votes: 2,
        hasVote: false
      }]
    },
    {
      id: 8,
      title: "Só Depende de Nós...",
      type: "TEXT",
      description: `Só depende de nós de que forma vamos encarar um novo dia, uma nova dificuldade, uma mudança, ou de uma forma geral a própria vida.
      Em cada um de nós vive o poder da escolha, o poder de lutar ou desistir, de seguir em frente ou recuar. Por vezes parece difícil, impossível, mas quando existe verdadeira vontade de lutar, tudo se torna superável.
      Então não desista nunca, por mais impossível que pareça, tudo é possível! O poder está em você, o poder de querer, o poder para fazer, o poder para mudar!`,
      status: true,
      filed: false,
      createdAt: null,
      updatedAt: null,
      createdBy: null,
      updatedBy: null,
      totalComments: 160,
      media: [],
      pollTopics: []
    }
  ]
}

export default Mock;