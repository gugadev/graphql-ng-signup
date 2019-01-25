import { GraphQLError } from 'graphql'
import { ArgumentValidationError } from 'type-graphql'
import { ValidationError } from 'class-validator'

/**
 * Describes a custom GraphQL error format.
 * @param { err } Original GraphQL Error
 * @returns formatted error
 */
export default (err: GraphQLError): any => {
  const formattedError: { [key: string]: any } = {
    message: err.message
  }

  if (err.originalError instanceof ArgumentValidationError) {
    formattedError.validationErrors = err.originalError.validationErrors.map((ve: ValidationError) => {
      const constraints = { ...ve.constraints }
      return {
        property: ve.property,
        value: ve.value,
        constraints
      }
    })
  }
  return formattedError
}
