import type { Schema, Attribute } from '@strapi/strapi';

export interface TestQuestionsQuestion extends Schema.Component {
  collectionName: 'components_test_questions_questions';
  info: {
    displayName: 'question';
    icon: 'bulletList';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test-questions.question': TestQuestionsQuestion;
    }
  }
}
