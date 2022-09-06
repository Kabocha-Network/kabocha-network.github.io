---
sidebar_position: 1
---

# Supersig Introduction

The supersig pallet extends the capabilities of a multisig so it can be fit for governance of
larger funds. With a supersig you can make group decisions on a share account, add and remove members, and have a simpleMajority threshold.

Note: the multisig addresses won’t change even though the members can be added, removed, or can
leave themselves

## Overview

The Supersig pallet provide function for:

- Creating a supersig,
- Adding and removing members,
- Leaving the supersig,
- Submit transaction to a supersig,
- Vote for the transaction,
- Remove a pending transaction,
- Delete a supersig,


### Dispatchable Functions

- `create_supersig` - create a supersig, with specified members. The creator will have to
  deposit an existencial balance and a deposit that depend on the number of members, in the
  supersig account. This last amount will be reserved on the supersig

  /!!\ note of caution /!!\ the creator of the supersig will NOT be added by default, he will
  have to pass his adress into the list of added users.

- `submit_call` - make a proposal on the specified supersig. an amount corresponding to the
  length of the encoded call will be reserved.

- `approve_call` - give a positive vote to a call. if the number of vote >= SimpleMajority, the
  call is executed. An user can only approve a call once.

- `remove_call` - remove a call from the poll. The reserved amount of the proposer will be
  unreserved

- `add_members` - add new members to the supersig. In case some user are already in the
  supersig, they will be ignored.

- `remove_members` - remove members from the supersig. In case some user are not in the
  supersig, they will be ignored.

- `remove_supersig` - remove the supersig and all the associated data. Funds will be unreserved
  and transfered to specified beneficiary.

- `leave_supersig` - remove the caller from the supersig.

### Get a node started and use the functions

- `cargo build --release`

- `./target/release/node-template --dev`

- Then go to view your node from Polkadot JS Apps development > local node https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/addresses


## Supersig Tutorial

### Create a supersig account

Go to `Developer > Extrinsics > supersig > createSupersig(members)`

![createSupersig](/img/screenshots/createSupersig.png)
_Notice how if you are the creator of the supersig, you must also add yourself as a member._ 

### Save Supersig Address (and fund it)

![SupersigCreated](/img/screenshots/SupersigCreated.png)
_Copy the address from event logs and add it as a contact in your address book._

- Add the supersig to your address book 
- Fund the supersig account from any account that has funds. 


### Make a call from your Supersig

Now that your supersig is funded and has members, you can create a call that needs a simpleMajority to be executed.

Go to `Developer > Extrinsics > supersig > submitCall(supersigAccount, call)`

![submitCall](/img/screenshots/submitCall.png)
_create a call from any funded account. In this example we submit a call to send balance transfer of 500 to Ferdie. Reminder that you need to add the amount plus the number of decimals for your blockchain, in this case 12 zeroes._

### Members vote/sign transactions

Go to `Developer > Extrinsics > supersig > approveCall(supersigAccount, callId)`

![ApproveCall](/img/screenshots/ApproveCall.png)
_A simpleMajority of members sign a call for the supersig account._ 

- Notice that Alice created the call, but she also has to approve the call. 
- The callId here is `0` which is a call nonce. This is the first ever call from this supersig so we know it is zero. 
- You can also view the call nonce from the event log or from  `> chain_state`. 
- Remeber to approve a call, you need to be a member with a sufficiently funded balance. 

![CallVoted](/img/screenshots/CallVoted.png)
_Alice has voted on Call with nonce of `0`. Now we just need one of the 2 other members to make a simpleMajority._


![CallExecution](/img/screenshots/CallExecution.png)
_Bob voted and then the simpleMajority threshold was reached and the Call was executed. Ferdie now receives his balance of 500._


### Add/remove members

Go to `Developer > Extrinsics > supersig > addMembers(newMembers)`

**A common mistake**

Here is a common way to submit a call. In this example we want to add a member, but just because the call is a supersig call it doesn't mean we can skip starting with `submitCall`
![AddMemberIncorrect](/img/screenshots/AddMemberIncorrect.png)
_In this example we add Dave as a member, which also requires simpleMajority vote. But wait, it did not work because we need to submitCall then addMember within the call._

**The correct way**
![AddMember](/img/screenshots/AddMember.png)
_Now we have wrapped the addMember call correctly within submitCall, and have selected the Supersig we want to interact with._

- Add a member (Dave)
- In this example we add Dave as `master`
  - This means he will have 50% voting power. And no matter how many members there are, if he votes then only one other person is required to create a `simpleMajority`.

![AddMember](/img/screenshots/AddMemberCallSubmitted.png)
_This is the second ever call for the Supersig. So the `callId` is now `1`._

Supersig members need to vote in order to accept Dave as a member. 

![AddMember](/img/screenshots/ApproveCallNewId.png)
_Dont't forget to add the correct callId when voting for the call._

![CallExecutionDave](/img/screenshots/CallExecutionDave.png)
_...Alice and Bob vote and Dave is now a member of the Supersig._ 


### Get Information about your Supersig

**Find your AccountNonce from your AccountId**

Go to `Developer > Runtime Calls > accountNonceApi > accountNonce(accountId)`

![AccountNonce](/img/screenshots/AccountNonce.png)
_select your AccountId to get your AccountNonce_

Your AccountNonce is the number of your Supersig that is used to represent your supersig. Here we find the nonce is `0`.

In our exmaple, there are now 4 members in the Supersig, 3 `Standard` members, and 1 `Master` member. But if we lose track of this let's check from the chain state. 

Go to `Developer > chain state > supersig > members(u128, AccountId32): PalletSupersigRole`

![ChainStateMembers](/img/screenshots/ChainStateMembers.png)

- Select the id of the supersig. In this case we know theres only one, so it's `0`
- For the second parameter `Option<AccountId32>` untick the box so that we can get a list of all the `Members` of the selected supersig.
- As we can see from the screenshot there are 4 accounts, each with their Member type (standard or master). 


## RPC

### RPC functions

- `superSig_getSupersigId` 
  - Get the SupersigId (nonce) of the supersig by providing your AccountId.
  - Parameter(s): `supersig_account: AccountId`
- `superSig_getUserSupersigs` 
  - Find what supersigs your associated to.
  - Parameter(s):`who: AccountId` the AccountId you'd like to check
- `superSig_listMembers`
  - Get list of members related to supersig. 
  - Parameter(s): `SupersigId` (nonce)
- `superSig_listProposals`
  - Get list of proposals (calls) connected to a supersig. 
  - Parameter(s): `SupersigId` (nonce)
- `superSig_getProposalState`
  - Get the state of votes after youve submitted a call for voting. 
  - Parameter(s): `SupersigId` (nonce)


### cURL

Use cURL to make rpc calls:

#### Example

**List Members**

`superSig_listMembers`

From our example we make a jsonrpc call through cURL, (assuming that your chain is running on port 9933).

```bash
curl -sS -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "superSig_listMembers", "params": [0]}' http://localhost:9933/
```

Result:

```json
{
  "jsonrpc":"2.0","result":
  [
    ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","Standard"], ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty","Standard"], ["5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y","Standard"]  //Charlie
  ],
  "id":1
} //Alice, Bob and Charlie's accounts related to Supersig[0]
```
