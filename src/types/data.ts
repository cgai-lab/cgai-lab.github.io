export interface PersonType {
  node: {
    course: string;
    description?: string;
    endDate: string;
    id: string;
    image: {
      url: string;
      title: string;
    };
    name: string;
    startDate: string;
    type: string;
    personalUrl?: string;
  };
}

export interface PersonsType {
  data: {
    allContentfulPerson: {
      edges: PersonType[];
    };
  };
}

export interface BoardType {
  id: string;
  content: {
    childMarkdownRemark: {
      html: string;
    };
  };
  title: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    url: string;
  };
}

export interface NewsType {
  data: {
    allContentfulNews: {
      nodes: BoardType[];
    };
  };
}
