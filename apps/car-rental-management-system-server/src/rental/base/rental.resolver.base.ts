/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Rental } from "./Rental";
import { RentalCountArgs } from "./RentalCountArgs";
import { RentalFindManyArgs } from "./RentalFindManyArgs";
import { RentalFindUniqueArgs } from "./RentalFindUniqueArgs";
import { DeleteRentalArgs } from "./DeleteRentalArgs";
import { RentalService } from "../rental.service";
@graphql.Resolver(() => Rental)
export class RentalResolverBase {
  constructor(protected readonly service: RentalService) {}

  async _rentalsMeta(
    @graphql.Args() args: RentalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Rental])
  async rentals(@graphql.Args() args: RentalFindManyArgs): Promise<Rental[]> {
    return this.service.rentals(args);
  }

  @graphql.Query(() => Rental, { nullable: true })
  async rental(
    @graphql.Args() args: RentalFindUniqueArgs
  ): Promise<Rental | null> {
    const result = await this.service.rental(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Rental)
  async deleteRental(
    @graphql.Args() args: DeleteRentalArgs
  ): Promise<Rental | null> {
    try {
      return await this.service.deleteRental(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
