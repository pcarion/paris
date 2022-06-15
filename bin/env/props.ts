export interface AppProps {
  readonly domainName: string;
  readonly authSubDomainName: string;
  readonly apiSubDomainName: string;
  readonly webAppSubDomainName: string;
  readonly userPoolName: string;
}
