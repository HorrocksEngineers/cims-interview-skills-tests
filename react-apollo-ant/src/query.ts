import { gql } from '@apollo/client';

export const ProjectAsphaltLots = gql`
  query (
    $globalId: String!
    $asphaltLotFieldInput: AsphaltLotFieldInput
    $payItemNoGeometryFieldInput: PayItemNoGeometryFieldInput
    $asphaltSampleFieldInput: AsphaltSampleFieldInput
    $asphaltPlacementFieldInput: AsphaltPlacementFieldInput
    $asphaltCoreMeasurementFieldInput: AsphaltCoreMeasurementFieldInput
  ) {
    project(globalId: $globalId) {
      projectName
      clientProjectNumber
      projectMetadata {
        sharePointURL
      }
      asphaltLots(asphaltLotFieldInput: $asphaltLotFieldInput) {
        asphaltLotId
        lotCreatedDate
        status
        asphaltMixDesign {
          mixDesignNumber
        }
        asphaltMaterial {
          placementType
        }
        payItemNoGeometries(payItemNoGeometryFieldInput: $payItemNoGeometryFieldInput) {
          payItemId
          description
        }
        asphaltSamples(asphaltSampleFieldInput: $asphaltSampleFieldInput) {
          asphaltSampleId
          timeSampled
          notes
        }
        asphaltPlacements(asphaltPlacementFieldInput: $asphaltPlacementFieldInput) {
          placementId
          beginOffset
          beginAlignment
          beginStation
          endAlignment
          endOffset
          endStation
          asphaltCoreMeasurements(
            asphaltCoreMeasurementFieldInput: $asphaltCoreMeasurementFieldInput
          ) {
            coreType
            alignment
            offset
            station
            measurementId
            measurementDate
          }
        }
      }
    }
  }
`;
