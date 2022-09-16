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
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    url: string;
  };
  writer: {
    name: string;
    personalUrl: string;
    image: {
      url: string;
    };
  };
}
export interface NewsType {
  data: {
    news: {
      nodes: BoardType[];
    };
  };
}

export interface PaperType {
  id: string;
  date: string;
  title: string;
  type: string;
  createdAt: string;
  option: string[];
  url?: string;
  withPerson: string[];
  doi?: string;
}

export interface PaperListType {
  data: {
    paperList: {
      edges: {
        node: PaperType;
      }[];
    };
  };
}

export interface ProjectType {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  option: string[];
}

export interface ProjectListType {
  data: {
    projectList: {
      edges: {
        node: ProjectType;
      }[];
    };
  };
}

export interface MainIntroType {
  id: string;
  title: string;
  content: string;
  type: boolean;
  img: {
    url: string;
  };
}

export interface MainIntroListType {
  data: {
    mainIntroList: {
      edges: {
        node: MainIntroType;
      }[];
    };
  };
}
