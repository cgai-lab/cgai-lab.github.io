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
