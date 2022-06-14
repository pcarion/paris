import {
  PostConfirmationTriggerHandler
} from 'aws-lambda'

// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html
export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log("userPoolPostConfirmation:")
  console.log(event)
}
