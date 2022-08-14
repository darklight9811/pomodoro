import { Store } from "@zos/services"

export interface ServiceInterface {
	$store	: Store;
	$model?	: string;
}