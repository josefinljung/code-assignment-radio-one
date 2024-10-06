export interface ChannelResponse {
  channel: Channel;
  copyright: string;
}

export interface Channel {
  image: string;
  imagetemplate: string;
  color: string;
  tagline: string;
  siteurl: string;
  liveaudio: {
    id: number;
    url: string;
    statkey: string;
  };
  scheduleurl: string;
  channeltype: string;
  xmltvid: string;
  id: number;
  name: string;
}

export interface PaginationProps {
  page: number;
  size: number;
  totalhits: number;
  totalpages: number;
  nextpage: string;
}

export interface EpisodesResponse {
  copyright: string;
  episodes: Episode[];
  pagination: PaginationProps;
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  url: string;
  program: { id: number; name: string };
  audiopreference: string;
  audiopriority: string;
  audiopresentation: string;
  publishdateutc: string;
  imageurl: string;
  imageurltemplate: string;
  photographer: string;
  broadcasttime: {
    starttimeutc: string;
    endtimeutc: string;
  };
  broadcast?: {
    availablestoputc: string;
    playlist: {
      duration: number;
      publishdateutc: string;
      id: number;
      url: string;
      statkey: string;
    };
    broadcastfiles: BroadcastFile[];
  };
  listenpodfile?: {
    title: string;
    description: string;
    filesizeinbytes: number;
    program: { id: number; name: string };
    availablefromutc: string;
    duration: number;
    publishdateutc: string;
    id: number;
    url: string;
    statkey: string;
  };
  downloadpodfile?: {
    title: string;
    description: string;
    filesizeinbytes: number;
    program: { id: number; name: string };
    availablefromutc: string;
    duration: number;
    publishdateutc: string;
    id: number;
    url: string;
    statkey: string;
  };
  channelid: number;
}

export interface BroadcastFile {
  duration: number;
  publishdateutc: string;
  id: number;
  url: string;
  statkey: string;
}

export interface ProgramsResponse {
  copyright: string;
  programs: Program[];
  pagination: PaginationProps;
}

export interface Program {
  description: string;
  programcategory: { id: number; name: string };
  broadcastinfo: string;
  email: string;
  phone: string;
  programurl: string;
  programslug: string;
  programimage: string;
  programimagetemplate: string;
  programimagewide: string;
  programimagetemplatewide: string;
  socialimage: string;
  socialimagetemplate: string;
  socialmediaplatforms: SocialMediaPlatform[];
  channel: { id: number; name: string };
  archived: Boolean;
  hasondemand: Boolean;
  haspod: Boolean;
  responsibleeditor: string;
  id: number;
  name: string;
}

export interface SocialMediaPlatform {
  platform: string;
  platformurl: string;
}
