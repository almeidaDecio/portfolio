export interface Translation {
  layout: {
    siteTitle: string;
    siteDescription: string;
    ogDescription: string;
    sidebar: {
      name: string;
      role: string;
    };
    nav: {
      perfil: string;
      experiencias: string;
      cases: string;
      formacao: string;
      skills: string;
      contato: string;
    };
    breadcrumb: {
      portfolio: string;
      perfil: string;
      experiencias: string;
      cases: string;
      formacao: string;
      skills: string;
      contato: string;
    };
    caseNames: {
      softfocus: string;
      gamegather: string;
      amigoSecreto: string;
      hurstCapital: string;
    };
    header: {
      toggleSidebar: string;
      portfolioLabel: string;
    };
    footer: string;
  };
  home: {
    title: string;
    paragraphs: string[];
    buttons: {
      verCases: string;
      contato: string;
      curriculo: string;
    };
    keywords: string[];
  };
  cases: {
    title: string;
    description: string;
    sectionTitle: string;
    items: Array<{
      subtitle: string;
      title: string;
      summary: string;
      company: string;
    }>;
  };
  experiencias: {
    title: string;
    description: string;
    sectionTitle: string;
    intro: string;
    skillsLabel: string;
    verCase: string;
    items: Array<{
      role: string;
      period: string;
      location: string;
      summary: string;
      skills: string[];
    }>;
  };
  formacao: {
    title: string;
    description: string;
    sectionTitle: string;
    items: Array<{
      type: string;
      title: string;
      institution: string;
      period: string;
      description: string;
    }>;
  };
  skills: {
    title: string;
    description: string;
    sectionTitle: string;
    groups: Array<{
      eyebrow: string;
      title: string;
      items: string[];
    }>;
  };
  contato: {
    title: string;
    description: string;
    sectionTitle: string;
    sectionDescription: string;
    channels: Array<{
      label: string;
    }>;
    copyButton: string;
  };
  caseAmigoSecreto: {
    title: string;
    description: string;
    sectionTitles: string[];
    subtitle: string;
    sections: Record<string, unknown>;
  };
  caseHurstCapital: {
    title: string;
    description: string;
    sectionTitles: string[];
    subtitle: string;
    sections: Record<string, unknown>;
  };
  caseSoftfocus: {
    title: string;
    description: string;
    sectionTitles: string[];
    subtitle: string;
    sections: Record<string, unknown>;
  };
  caseGamegather: {
    title: string;
    description: string;
    sectionTitles: string[];
    subtitle: string;
    sections: Record<string, unknown>;
  };
}
