import type { ClientMessage } from "../types.js";

/**
 * Location API component
 *
 * @group Location
 */
export default class Location implements ClientMessage {
    /**
     * The latitude of the location
     */
    readonly longitude: number;
    /**
     * The longitude of the location
     */
    readonly latitude: number;
    /**
     * The name of the location
     */
    readonly name?: string;
    /**
     * The address of the location
     */
    readonly address?: string;

    get _type(): "location" {
        return "location";
    }

    /**
     * Create a Location object for the API
     *
     * @param longitude - Longitude of the location
     * @param latitude - Latitude of the location
     * @param name - Name of the location
     * @param address - Address of the location, only displayed if name is present
     */
    constructor(
        longitude: number,
        latitude: number,
        name?: string,
        address?: string
    ) {
        this.longitude = longitude;
        this.latitude = latitude;
        if (name) this.name = name;
        if (address) this.address = address;
    }

    _build() {
        return JSON.stringify(this);
    }
}
