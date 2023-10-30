# New knowledge

- **Curl:** What is Curl?

# Novu -

Some _examples template:_ - no customize workflow here

- Password Reset:

- Mention in a comment:

- Account Activation:

- Friend Request:

- Event Reminder:

Some _examples nodes:_ - no create new nodes here

- `Trigger node: ` Start node

- `Chat node: ` + _filter rule_

  - Chat message content
  - Rule filter
  - Provider instance to send chat

- `Email node: `

  - Email layout - with _variables_ to config information in the email
  - Rule filter
  - Provider instance to send email

- `In-app node: `

  - config notifications, actions will be activated in app
  - Rule filter

- `SMS node: `

  - Quite same with chat node

- `Push node: `

  - Quite same with chat node

Some _examples side-effects nodes:_ - no create new nodes here

- `Delay node: ` + _filter rule_

- config after _interval_ to next node activate ~ config in different time units

- `Digest node: ` + _filter rule_

# User flow

- All action nodes _require_ provider/tenant to activate

- All nodes have `filter button` - to create rules to activate

- Choose template -> move to editor + choose apply stage (dev or production)

- Click to 'add button' on edge -> choose which node -> add note to this edge

- Always start with the node trigger, _maybe don't have conditional workflow_
