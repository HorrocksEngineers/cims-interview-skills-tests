import { gql } from '@apollo/client';

export default function useProjectAsphaltLots() {
  const globalId = 'DA8C588C-A7DA-41F1-AD59-602363787D48';
  // TODO use the Apollo Client to query the GraphQL API with the following query
}

/**
 * Gets `AsphaltLot` records from
 */
const ProjectAsphaltLotsQuery = gql`
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

type ProjectAsphaltLotsType = {
  project: {
    projectName?: string;
    clientProjectNumber?: string;
    projectMetadata: {
      sharePointURL: string;
    };
    asphaltLots: {
      asphaltLotId?: string;
      lotCreatedDate?: Date;
      status?: string;
      asphaltMixDesign?: {
        mixDesignNumber?: string;
      };
      asphaltMaterial?: {
        placementType?: string;
      };
      payItemNoGeometries: {
        payItemId?: string;
        description?: string;
      }[];
      asphaltSamples: {
        asphaltSampleId?: string;
        timeSampled?: Date;
        notes?: string;
      }[];
      asphaltPlacements: {
        placementId?: string;
        beginOffset?: string;
        beginAlignment?: string;
        beginStation?: string;
        endAlignment?: string;
        endOffset?: string;
        endStation?: string;
        asphaltCoreMeasurements: {
          coreType?: string;
          alignment?: string;
          offset?: string;
          station?: string;
          measurementId?: string;
          measurementDate?: Date;
        }[];
      }[];
    }[];
  };
};
