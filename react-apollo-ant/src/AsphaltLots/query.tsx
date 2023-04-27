import { gql, useQuery } from '@apollo/client';

/**
 * TODO exclude deleted `AsphaltLot` records
 *
 * TODO handle errors with a pop-up notification
 */
export default function useProjectAsphaltLots() {
  const globalId = 'DA8C588C-A7DA-41F1-AD59-602363787D48';
  // most of this has been done for you as CIMS has its own methodology for
  // generating useQuery hooks automatically
  const query = useQuery<ProjectAsphaltLotsType>(ProjectAsphaltLotsQuery, {
    variables: {
      globalId,
    },
  });
  return query;
}

/**
 * While the `globalId` variable has been provided above, you may use any of
 * the inputs to modify query results
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
        deleted
        asphaltMixDesign {
          mixDesignNumber
        }
        asphaltMaterial {
          placementType
        }
        payItemNoGeometries(payItemNoGeometryFieldInput: $payItemNoGeometryFieldInput) {
          payItemId
          description
          deleted
        }
        asphaltSamples(asphaltSampleFieldInput: $asphaltSampleFieldInput) {
          asphaltSampleId
          timeSampled
          notes
          deleted
        }
        asphaltPlacements(asphaltPlacementFieldInput: $asphaltPlacementFieldInput) {
          placementId
          beginOffset
          beginAlignment
          beginStation
          endAlignment
          endOffset
          endStation
          deleted
          asphaltCoreMeasurements(
            asphaltCoreMeasurementFieldInput: $asphaltCoreMeasurementFieldInput
          ) {
            coreType
            alignment
            offset
            station
            measurementId
            measurementDate
            deleted
          }
        }
      }
    }
  }
`;

/**
 * We've done the work of typing out the response of `ProjectAsphaltLotsQuery`
 * as CIMS has it's own methodology for generating types automatically
 */
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
      deleted?: string;
      asphaltMixDesign?: {
        mixDesignNumber?: string;
      };
      asphaltMaterial?: {
        placementType?: string;
      };
      payItemNoGeometries: {
        payItemId?: string;
        description?: string;
        deleted?: string;
      }[];
      asphaltSamples: {
        asphaltSampleId?: string;
        timeSampled?: Date;
        notes?: string;
        deleted?: string;
      }[];
      asphaltPlacements: {
        placementId?: string;
        beginOffset?: string;
        beginAlignment?: string;
        beginStation?: string;
        endAlignment?: string;
        endOffset?: string;
        endStation?: string;
        deleted?: string;
        asphaltCoreMeasurements: {
          coreType?: string;
          alignment?: string;
          offset?: string;
          station?: string;
          measurementId?: string;
          measurementDate?: Date;
          deleted?: string;
        }[];
      }[];
    }[];
  };
};
