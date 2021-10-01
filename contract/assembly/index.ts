import { logging, PersistentMap } from 'near-sdk-as'

const CandidateURL = new PersistentMap<string, string>("CandidateURL");
const CandidatePair = new PersistentMap<string, string[]>("Candidate Pair");
const PromptArray = new PersistentMap<string, string[]>("array of prompts")
const VoteArray = new PersistentMap<string, i32[]>("stores votes")
const userParticipantion = new PersistentMap<string, string[]>("user Participants")

export function getUrl(name: string): string {
  if (CandidateURL.contains(name)) {
    return CandidateURL.getSome(name)
  } else {
    logging.log("Couldn't find user")
    return ""
  }
}

export function didParticipate(prompt: string, user: string): bool {
  if (userParticipantion.contains(prompt)) {
    let getArray = userParticipantion.getSome(prompt)
    return getArray.includes(user)
  } else {
    logging.log('prompt not found')
    return false
  }
}

export function getAllPrompts(): string[] {
  if (PromptArray.contains('AllArrays')) {
    return PromptArray.getSome('AllArrays')
  } else {
    logging.log('no prompts found')
    return []
  }
}

export function getVote(prompt: string): i32[] {
  if (VoteArray.contains(prompt)) {
    return VoteArray.getSome(prompt)
  } else {
    logging.log('prompt not found')
    return [0, 0]
  }
}

export function getCandidatePair(prompt: string): string[] {
  if (CandidatePair.contains(prompt)) {
    return CandidatePair.getSome(prompt)
  } else {
    logging.log('prompt not found')
    return []
  }
}

export function addUrl(name: string, url: string): void {
  CandidateURL.set(name, url);
  logging.log('add url for ' + name);
}

export function addCandidatePair(prompt: string, name1: string, name2: string): void {
  CandidatePair.set(prompt, [name1, name2])
}

export function addToPromptArray(prompt: string): void {
  logging.log('added to prompt array');
  if (PromptArray.contains('AllArrays')) {
    let tempArray = PromptArray.getSome('AllArrays')
    tempArray.push(prompt)
  } else {
    PromptArray.set('AllArrays', [prompt])
  }
}

export function addVote(prompt: string, index: i32): void {
  if (VoteArray.contains(prompt)) {
    let tempArray = VoteArray.getSome(prompt)
    let tempVal = tempArray[index]
    let newVal = tempVal + 1
    tempArray[index] = newVal
    VoteArray.set(prompt, tempArray)
  } else {
    let newArray = [0, 0]
    newArray[index] = 1
    VoteArray.set(prompt, newArray)
  }
}

export function recordUser(prompt: string, user: string): void {
  if (userParticipantion.contains(prompt)) {
    let tempArray = userParticipantion.getSome(prompt)
    tempArray.push(user)
    userParticipantion.set(prompt, tempArray)
  } else {
    userParticipantion.set(prompt, [user])
  }
}