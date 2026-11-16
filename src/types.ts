export interface OpportunityCategory {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  iconName: string;
  details: {
    description: string;
    highlights: string[];
    sampleItems: {
      title: string;
      provider: string;
      awardOrType: string;
      deadline: string;
      tags: string[];
    }[];
  };
}

export interface AICapability {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  sampleQuestion: string;
  sampleResponse: {
    overview: string;
    steps: {
      title: string;
      desc: string;
    }[];
    aiTip: string;
  };
}

export interface CommunityFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bulletPoints: string[];
}

export interface JourneyStep {
  stepNumber: string;
  name: string;
  title: string;
  description: string;
  actionItem: string;
}
