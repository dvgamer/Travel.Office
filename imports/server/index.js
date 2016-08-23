const request     = require('request');
const bodyParser  = require('body-parser');

// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({ extended: false }));

Picker.route('/APIv3/exchange-rate/', function(params, req, res, next) {
  if(req.headers['Token-Auth']) console.log('Token', req.headers['Token-Auth']);
  console.log(req.body);
  // let bodyRaw = ` 
  //   <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hs="http://webservices.galileo.com/">
  //     <soapenv:Body>
  //       <hs:MultiSubmitXml>
  //           <hs:Profile>DynGalileoProd_79HG</hs:Profile>
  //           <hs:Requests>
  //               <Requests>
  //                   <Request>
  //                       <Transaction>
  //                           <FareQuoteMultiDisplay_12>
  //                               <FareDisplayMods>
  //                                   <QueryHeader>
  //                                     <UniqueKey>0000</UniqueKey>
  //                                     <LangNum>00</LangNum>
  //                                     <Action>25</Action>
  //                                     <RetCRTOutput>N</RetCRTOutput>
  //                                     <NoMsg>N</NoMsg>
  //                                     <NoTrunc>Y</NoTrunc>
  //                                     <IMInd>N</IMInd>
  //                                     <FIPlus>N</FIPlus>
  //                                     <PEInd>N</PEInd>
  //                                     <PVInd></PVInd>
  //                                     <NBInd>N</NBInd>
  //                                     <ActionOnlyInd>N</ActionOnlyInd>
  //                                     <TranslatePeriod>N</TranslatePeriod>
  //                                     <PIInd>N</PIInd>
  //                                     <IntFrame1>N</IntFrame1>
  //                                     <SmartParsed>N</SmartParsed>
  //                                     <PDCodes>N</PDCodes>
  //                                     <BkDtOverride>N</BkDtOverride>
  //                                     <HostUse25>N</HostUse25>
  //                                     <DefCurrency>N</DefCurrency>
  //                                     <PFPWInd>N</PFPWInd>
  //                                     <PFPQInd>N</PFPQInd>
  //                                     <HostUse29>N</HostUse29>
  //                                     <HostUse30>N</HostUse30>
  //                                     <HostUse31>N</HostUse31>
  //                                     <HostUse32>N</HostUse32>
  //                                     <HostUse33>N</HostUse33>
  //                                     <CurrencyQual>
  //                                     <CalcFZINUCInd>N</CalcFZINUCInd>
  //                                     <Spare6>NNNN</Spare6>
  //                                     <TableDispInd>Y</TableDispInd>
  //                                     <Spare7>NN</Spare7>
  //                                     <Spare8>NNNNNNNN</Spare8>
  //                                 </CurrencyQual>
  //                               </QueryHeader>
  //                                   <CurrencyConversion>
  //                                       <UniqueKey>0000</UniqueKey>
  //                                       <LineNum>000</LineNum>
  //                                       <CountryRateTables>N</CountryRateTables>
  //                                       <AgainstCRTLocation>N</AgainstCRTLocation>
  //                                       <CityCurrency>N</CityCurrency>
  //                                       <RateBetweenToFrom>N</RateBetweenToFrom>
  //                                       <IATAFZC>N</IATAFZC>
  //                                       <IATAFZI>N</IATAFZI>
  //                                       <UseIATARates>N</UseIATARates>
  //                                       <Spare>N</Spare>
  //                                       <SellersTableFZS>Y</SellersTableFZS>
  //                                       <FZNoRounding>N</FZNoRounding>
  //                                       <MultFactorPresent>N</MultFactorPresent>
  //                                       <DivFactorPresent>N</DivFactorPresent>
  //                                       <FZIAllEntry>N</FZIAllEntry>
  //                                       <FZBuyersTable>N</FZBuyersTable>
  //                                       <FZAuditTrail>N</FZAuditTrail>
  //                                       <RateBetweenCurrencies>N</RateBetweenCurrencies>
  //                                       <Country />
  //                                       <FromCurrency>JPY</FromCurrency>
  //                                       <ToCurrency>THB</ToCurrency>
  //                                       <CRTCurrency />
  //                                       <Amt>1</Amt>
  //                                       <City>N</City>
  //                                       <SpecBankRate><![CDATA[        ]]></SpecBankRate>
  //                                       <DispDt><![CDATA[        ]]></DispDt>
  //                                       <AuditTrailDispDt><![CDATA[        ]]></AuditTrailDispDt>
  //                                   </CurrencyConversion>
  //                               </FareDisplayMods>
  //                           </FareQuoteMultiDisplay_12>
  //                       </Transaction>
  //                   </Request>
  //               </Requests>   
  //           </hs:Requests>
  //       </hs:MultiSubmitXml>
  //     </soapenv:Body>
  //   </soapenv:Envelope>
  // `;

  // var options = { 
  //   method: 'POST',
  //   url: 'https://apac.webservices.travelport.com/B2BGateway/service/XMLSelect',
  //   headers: 
  //    {
  //      'cache-control': 'no-cache',
  //      'content-type': 'text/xml; charset=utf-8',
  //      'authorization': 'Basic R1dTL1BDQzc5SEc6R3RoYTc5aGc=' 
  //    },
  //   body: bodyRaw
  // }
  // request(options, function (error, response, body) {
  //   if (error) {
  //     res.writeHead(404);
  //   } else {
  //     res.writeHead(200);
  //     res.end(body);
  //   }
  // });

  res.end();
});