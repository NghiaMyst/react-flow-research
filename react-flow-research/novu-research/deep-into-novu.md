# Subscriber

- entities designed to receive notifications

- each subscriber:

  - `Data: ` user data, custom data, etc.
  - `Channel Specific Credentials: ` deviceToken, webhookUrl, etc.

  - create or update through function, API, or import files

# Topics

- simple API providing an easy interface for triggering notifications to multiple subscribers at once.

- is identified by a custom key that is provided by the user

# Preferences

# Workflow

## Overview - How apply to my projects

- Trigger `workflow-id` to `something (projects, topics)`

## On Docs

- A workflow holds the entire flow of steps (nodes) that are sent to the subscriber. This is where all the different channels are tied together under a single entity.

- acts as a blue print, encapsulating all flow and rules when an action is triggered

- where all the _different channels, filters, rules and actions_ are tied together under a single entity

- **contains:**

  - Name and Identifier:
  - Trigger: _need payload if necessary_
  - Channels:
    - channels utilize the credentials you provide to ensure the delivery of notifications on your behalf

# Steps - Filter

- allows you to customize the flow of notifications in your workflow by _specifying criteria for which notifications should be delivered_

## On Filter

- `On Payload: ` the key-value pairs in the payload must match the pre-defined

- `On Subscriber: ` the subscribers's information must match

- `On Webhook: ` - **must be consider when necessary**

- `On Online: ` (right now or last-online time) - [docs](https://docs.novu.co/workflows/step-filters#online-filter-mechanism)

- `Some filters may be considered: `
  - `Subscriber has seen: ` [docs](https://docs.novu.co/workflows/step-filters#subscriber-seen-read-filters)

# Digest Engine

- related to: _multiple trigger events -> aggregate them into a single message -> delivers to subscriber_

- need a additional field `digestKey`

## Digest Node

- each node that will be _below the digest node_ will be _only triggered once in the specified digest interval_

## Configuration

**Time interval**

**Digest Key**

- used with the `subscriberId` to group events

- The digest key might come useful when you want a _particular subscriber_ to get events grouped on a custom field. For example when an actor likes the user’s post, you might want to digest based on the post_id key

**Digest Strategy**

- use handle the digest step

1. Regular Strategy

- a digest will always be created for the specified window time

- Which means that from the first event trigger, if no active digest exists for this subscriber, one will be created and the user will receive the message only when the digest window time is reached.

2. Back-off Strategy

- before creating a digest, Novu will check if a message was sent to the user in the back-off period

- If a message was sent, a digest will be created. Otherwise, a message will be sent directly to the user and the digest creation will be skipped
