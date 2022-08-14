// Import
import ServiceClass 	from "./parts/class"
import { ServiceHook, ServiceInitializerDecorator, ServiceLoading } from "./parts/decorator"

// Build export
const Service = ServiceClass
Service.store = ServiceInitializerDecorator
Service.loadable = ServiceLoading
Service.hook = ServiceHook

export default Service