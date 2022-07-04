export interface PersonType {
  node: {
    course: string;
    description?: string;
    endDate: string;
    id: string;
    image: {
      publicUrl: string;
      title: string;
    };
    name: string;
    startDate: string;
    type: string;
    url?: string;
  };
}

export interface PersonsType {
  data: {
    allContentfulPerson: {
      edges: PersonType[];
    };
  };
}
