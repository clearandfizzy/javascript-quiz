import {getBlobByKey} from "@/datasource/netlify/lib/getBlobByKey";
import {getBlobList} from "@/datasource/netlify/lib/getBlobList";

export const BlobStorageRepository = () => {
	return {
		getBlobByKey: getBlobByKey,
		getBlobList: getBlobList,
	};
}
