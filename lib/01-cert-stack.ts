import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

interface CertStackProps extends cdk.StackProps {
  readonly domainName: string;
  readonly authSubDomainName: string;
  readonly apiSubDomainName: string;
  readonly webAppSubDomainName: string;
  readonly env: cdk.Environment;
}

export class CertStack extends cdk.Stack {
  public readonly authCert: acm.ICertificate;
  public readonly apiCert: acm.ICertificate;
  public readonly webAppCert: acm.ICertificate;

  constructor(scope: Construct, id: string, props: CertStackProps) {
    super(scope, id, props);
    // CERTIFICATE
    // Note: hosted zone must be created "manually" before and
    // the dns servers configured in the registrar
    const zone = route53.HostedZone.fromLookup(this, 'zone', {
      domainName: props.domainName,
    });

    const authCert = new acm.Certificate(this, 'acmAuthCert', {
      domainName: props.authSubDomainName.concat(props.domainName),
      validation: acm.CertificateValidation.fromDns(zone),
    });

    const apiCert = new acm.Certificate(this, 'acmApiCert', {
      domainName: props.apiSubDomainName.concat(props.domainName),
      validation: acm.CertificateValidation.fromDns(zone),
    });

    const webAppCert = new acm.Certificate(this, 'acmWebAppCert', {
      domainName: props.webAppSubDomainName.concat(props.domainName),
      validation: acm.CertificateValidation.fromDns(zone),
    });

    this.authCert = authCert;
    this.apiCert = apiCert;
    this.webAppCert = webAppCert;
  }
}
