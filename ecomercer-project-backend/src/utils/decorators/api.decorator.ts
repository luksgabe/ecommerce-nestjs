import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

// export function Auth(...roles: Role[]) {
//     return applyDecorators(
//       SetMetadata('roles', roles),
//       UseGuards(AuthGuard, RolesGuard),
//       ApiBearerAuth(),
//       ApiUnauthorizedResponse({ description: 'Unauthorized"' }),
//     );
// }