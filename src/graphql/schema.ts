import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Project {
    id: ID!
    name: String!
    startDate: String!
    endDate: String!
    trades: [Trade!]!
    tasks: [Task!]!
    createdAt: String!
  }

  type Trade {
    id: ID!
    name: String!
    license: String!
    project: Project!
    tasks: [Task!]!
  }

  type Task {
    id: ID!
    title: String!
    status: String!
    trade: Trade
    project: Project!
  }

  type Query {
    projects: [Project!]!
    trades: [Trade!]!
    tasks: [Task!]!
  }
`